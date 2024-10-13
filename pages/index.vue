<script setup lang="ts">


import Spotlight from '../components/home/Spotlight.vue'
import SpotlightCard from '../components/home/SpotlightCard.vue'


const cards = [
  {
    title: 'Easy to use',
    text: 'Id laborum laboris duis nostrud excepteur ut velit nulla magna Lorem proident non. ',
    icon: 'i-heroicons:cog'
  },
  {
    title: 'Reliable',
    text: 'Magna Lorem ex cillum fugiat ad enim aute irure sit duis minim.',
    icon: 'i-heroicons:check'
  },
  {
    title: 'Secure',
    text: 'Proident nostrud excepteur sint ut culpa consectetur aute adipisicing non anim ullamco.',
    icon: 'i-heroicons:lock-closed'
  },
  {
    title: 'Fast',
    text: 'Qui reprehenderit nostrud dolore nisi ad fugiat labore eiusmod sint aliquip nisi voluptate.',
    icon: 'i-heroicons:rocket-launch'
  },
  {
    title: 'Affordable',
    text: 'Reprehenderit fugiat elit in do ipsum ut pariatur.',
    icon: 'i-heroicons:currency-dollar'
  },
  {
    title: 'Scalable',
    text: 'Lorem deserunt et eiusmod. Ea in consectetur minim officia ullamco enim deserunt est.',
    icon: 'i-heroicons:chart-bar'
  }

]
</script>

<template>
  <div class="preview relative">


    <p class="z-10 text-9xl font-bold mb-8">
      Xeleen
    </p>
    <p class="z-10 text-xl text-gray-700 dark:text-gray-400 mb-12">
      Transforming Ideas into Reality: Digital Products and Services Marketplace
    </p>
    <NuxtLink to="/register"
              class="z-10 transition-all bg-indigo-500 hover:shadow-lg text-xl hover:shadow-indigo-500/50 text-gray-200 hover:text-white font-medium px-5 py-2 rounded-full">
      Get Started
    </NuxtLink>
    <div
        class="-z-10 pointer-events-none absolute inset-0 bg-center bg-grid-black/10 dark:bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(black,transparent_85%)] dark:[mask-image:radial-gradient(white,transparent_85%)]">

    </div>
    <div
        class="-z-10 absolute -top-8 left-1/2 size-72 -translate-x-1/2 rounded-full bg-indigo-500/40 dark:bg-indigo-500/25 blur-[120px] lg:-top-8 lg:size-[32rem] lg:blur-[200px]"></div>
  </div>

  <section>
    <Spotlight class="mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group">
      <template v-for="card in cards">
        <SpotlightCard>
          <div
              class="h-full relative z-20 overflow-hidden flex-1 flex flex-col rounded-[inherit] divide-y divide-gray-200 bg-gray-100 dark:divide-gray-800  dark:bg-gray-900 hover:bg-opacity-95 dark:hover:bg-opacity-90 transition-[background-opacity]">
            <div class="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
              <div class="">
                <div class="mb-2 pointer-events-none">
                  <icon :name="card.icon" class="w-8 h-8 flex-shrink-0"></icon>
                </div>
                <p class="text-base font-bold truncate">
                  {{ card.title }}
                </p>
                <div class="text-[15px] text-gray-700 dark:text-gray-400 mt-1">
                  {{ card.text }}
                </div>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </template>

    </Spotlight>
  </section>
</template>

<style scoped>
.preview {
  width: 100%;
  height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  position: relative;
}

</style>