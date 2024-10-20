import {genSalt, hash} from 'bcrypt';
import prisma from "~/lib/prisma";

interface fromSchema {
    name: String,
    lastname: String,
    email: String,
    password: String,
}

export default defineEventHandler(async (event) => {
    const form:fromSchema = await readBody(event)

    const slat = await genSalt(15)
    const passwordHash = await hash(form.password, slat)

    const searchUser = await prisma.users.findMany({
        where: {
            email: form.email
        }
    })

    if(searchUser.length > 0){
        return createError({
            statusCode: 401,
            statusMessage: 'An account with such an email already exists',
        })
    }

    const user = await prisma.users.create({
        data: {
            email: form.email,
            password: passwordHash,
            name: form.name,
            last_name: form.lastname
        }
    })

    const session = await setUserSession(event,{
        user:{
            userId: user.id,
        },
        createAd: Date.now()
    })

    return session
})
