export default defineNuxtRouteMiddleware(async (to, from) => {
    const {user} = useUserSession()
    if(user.value) {
        return navigateTo('/profile')
    }
})