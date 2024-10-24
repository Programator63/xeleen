export default defineNuxtPlugin(async (nuxtApp) => {
    const {data} = await useFetch("/api/user");
    return {
        provide:{
            user: data.value
        }
    }
})
