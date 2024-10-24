export default defineNuxtRouteMiddleware(async (to, from) => {
    const {user} = useUserSession()
    if(user.value) {
        console.log("Middleware unAuth")
        return navigateTo('/profile', {redirectCode: 301})
    }
})