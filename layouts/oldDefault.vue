<script setup lang="ts">

import HeaderComponents from "~/components/old/HeaderComponents.vue";
</script>

<template>
  <div class="flex gap-3 p-2">
    <AsideBarComponents/>
    <main>
      <HeaderComponents/>
      <div class="content">
        <slot />
      </div>
    </main>
  </div>
</template>

<style scoped>
main {
  width: 100%;
}
</style>