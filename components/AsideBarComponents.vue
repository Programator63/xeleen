<script setup lang="ts">


const AsideOpen = ref(useCookie('asideOpen', {
  default: () => {
    [false]
  }
}) || false)


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

const route = useRoute()
</script>

<template>
  <aside class="flex gap-5 flex-col  items-center justify-between p-2 bg-slate-800 rounded-xl transition-all z-10"
         :class="(AsideOpen) ? 'min-w-[250px] w-[250px] overflow-hidden' : 'min-w-[55px] w-[55px]'">
    <div>
      <NuxtLink to="/" class="text-white font-bold text-2xl"  :class="(AsideOpen) ? 'w-full' : 'w-[40px]'">
        {{ (AsideOpen) ? "Xeleen" : "X" }}
      </NuxtLink>

    </div>

    <div class="flex flex-col gap-3 w-full grow items-center relative  ">
      <template v-for="page in pages">
        <NuxtLink :to="page.path"
                  class="rounded-lg h-[40px] flex  items-center transition-all gap-1 hover:text-white"
                  :data-title="page.title"
                  :class="
                  (AsideOpen) ? 'w-full justify-start p-2' : 'w-[40px] link justify-center p-0.5',
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
      <icon name="i-solar:round-arrow-right-bold" size="24px" class="transition-all"
            :class="(AsideOpen) ? 'rotate-180' : ''"/>
      <span v-if="AsideOpen">
          {{ (AsideOpen) ? "Close" : "Open" }}
      </span>
    </button>
  </aside>
</template>

<style scoped>
.link {
  z-index: 10;
  transition: font-weight 0s !important;
}

.link::after {
  content: attr(data-title);
  position: absolute;
  left: 50px;
  user-select: none;
  pointer-events: none;
  opacity: 0;
  transition: all .1s ease-in-out;

  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
  border-radius: 10px;
  padding: 5px 10px;
}

.link:hover::after {

  animation: Link 0.2s ease-in-out forwards;

}

@keyframes Link {
  0% {
    opacity: 0;

    z-index: -10;
  }
  100% {
    opacity: 1;
    z-index: 999;
  }
}

</style>