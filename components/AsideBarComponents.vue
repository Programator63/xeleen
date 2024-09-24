<script setup lang="ts">
import {RouterLink, RouterView} from "#vue-router";

const AsideOpen = ref(false);


const pages = ref([
  {
    title: 'Home',
    icon: 'i-solar:home-angle-2-bold-duotone',
    iconActive: 'i-solar:home-angle-2-bold',
    path: '/',
  },
  {
    title: 'Marketplace',
    icon: 'i-solar:shop-bold-duotone',
    iconActive: 'i-solar:shop-bold',
    path: '/marketplace',
  }
])

const route = useRoute()
</script>

<template>
  <aside class="flex gap-5 flex-col  items-center justify-between p-2 bg-slate-800 rounded-xl transition-all"
         :class="(AsideOpen) ? 'w-[250px]' : 'w-[65px]'">
    <div>
      <NuxtLink to="/" class="text-white font-bold text-2xl">
        {{(AsideOpen) ? "Xeleen" : "X"}}
      </NuxtLink>

    </div>

    <div class="flex flex-col gap-3 w-full grow">
      <template v-for="page in pages">
        <NuxtLink :to="page.path"
                  class="rounded-lg h-[40px] flex  items-center transition-all gap-1 hover:text-white"
                  :class="
                  (AsideOpen) ? 'w-full justify-start p-2' : 'w-[40px] justify-center p-0.5',
                  (route.path === page.path)? 'bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white font-medium':'bg-gray-700 shadow-none text-gray-400'
          ">
          <icon :name="(route.path === page.path)? page.iconActive :page.icon" size="24px"/>
          <span v-if="AsideOpen">
            {{ page.title }}
          </span>
        </NuxtLink>
      </template>
    </div>

    <button @click="AsideOpen = !AsideOpen"
            class="rounded-lg h-[40px] flex  items-center transition-all gap-1 hover:text-white"
            :class="
                  (AsideOpen) ? 'w-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white font-medium justify-start p-2' : 'w-[40px] bg-gray-700 shadow-none text-gray-400 justify-center p-0.5'
          ">
      <icon name="i-solar:round-arrow-right-bold" size="24px" class="transition-all" :class="(AsideOpen) ? 'rotate-180' : ''"/>
      <span v-if="AsideOpen">
          {{(AsideOpen) ? "Close" : "Open"}}
      </span>
    </button>
  </aside>
</template>

<style scoped>

</style>