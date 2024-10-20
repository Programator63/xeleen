import prisma from "~/lib/prisma";
import {compare} from "bcrypt";

interface fromSchema {
    email: String,
    password: String,
}

export default defineEventHandler(async (event) => {
    const form: fromSchema = await readBody(event)

    if (!form.email || !form.password) {
        throw createError({statusCode: 401, statusMessage: 'Invalid email and password'})
    }

    const searchUser = await prisma.users.findMany({
        where: {
            email: form.email
        }
    })

    const user = searchUser[0]

    if (user <= 0) {
        return createError({
            statusCode: 401,
            statusMessage: 'Invalid email or password',
        })
    }

    const comparePassword = await compare(form.password, user.password)


    if(!comparePassword){
        return createError({
            statusCode: 401,
            statusMessage: 'Invalid email or password',
        })
    }

    const session = await setUserSession(event,{
        user:{
            userId: user.id,
        },
        createAd: Date.now()
    })

    return session
})
