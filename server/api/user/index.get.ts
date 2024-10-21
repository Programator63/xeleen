import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {


    const session = await getUserSession(event)



    if(!session.user) {
        return {}
    }


    const userData = await prisma.users.findMany({
        where: {
            id: session.user.userId
        }
    })

    const user = userData[0]

    if(!user) {
        return {}
    }
    const {password,  updatedAt, ...result} = user

    return result
})