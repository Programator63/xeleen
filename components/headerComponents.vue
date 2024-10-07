<script setup lang="ts">
const pages = ref([
  {
    title: 'Home',
    icon: 'i-solar:home-angle-2-bold-duotone',
    iconActive: 'i-solar:home-angle-2-bold',
    path: '/',
  },
  {
    title: 'Marketplace',
    icon: 'i-solar:smart-speaker-minimalistic-bold-duotone',
    iconActive: 'i-solar:smart-speaker-minimalistic-bold',
    path: '/marketplace',
  }
])

const atTopOfPage = ref(true)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

function handleScroll() {
  if (window.scrollY > 0) {
    atTopOfPage.value = false
  } else {
    atTopOfPage.value = true
  }
}
</script>

<template>
  <div :class="{ 'backdrop-blur-sm bg-gray-600/1': !atTopOfPage }" class="flex justify-center w-full fixed top-0 z-50">
    <header  class="py-3 container flex justify-between items-center ">
      <div class="lg:flex-1">
        <NuxtLink to="/" class="logo font-bold text-2xl ">

          Xeleen
        </NuxtLink>
      </div>

      <div class="flex justify-around px-1 py-1 ring-2 ring-slate-800 bg-gray-900/90 rounded-full lg:flex gap-x-3">
        <template v-for="page in pages">
          <NuxtLink :to="page.path" class="py-1 px-2 hover:px-3 hover:bg-gray-800 rounded-full linear text-sm/6 font-medium text-gray-200 hover:text-white transition-all ease-in-out">{{page.title}}</NuxtLink>
        </template>

      </div>
      <div class="flex items-center justify-end lg:flex-1">
        <NuxtLink to="/login" class="px-3 py-1 hover:bg-gray-800 rounded-full transition-all linear">
          Sign in
        </NuxtLink>
      </div>
    </header>
  </div>

</template>

<style scoped>
</style>