import prisma from "~/lib/prisma";
import {$fetch} from "ofetch/node";

export default defineEventHandler(async (event) => {


    const session = await getUserSession(event)

    if(!session.user) {
        return false
    }

    const userData = await prisma.users.findMany({
        where: {
            id: session.user.userId
        }
    })

    const user = userData[0]

    if(!user) {
        await $fetch("/api/user/logout")
        return false
    }
    const {password,  updatedAt, ...result} = user

    return result
})