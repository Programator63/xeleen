export default defineNuxtRouteMiddleware(async(to, from) => {
    const {user} = useUserSession()
    if(!user.value) {
        console.log("Middleware Auth")
        return navigateTo('/', { redirectCode: 301 })
    }
})