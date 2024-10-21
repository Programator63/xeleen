export default defineNuxtPlugin(async (nuxtApp) => {

    const {data} = await useFetch("/api/user");


    return data
})
