<script setup lang="ts">
const q = ref('')

</script>

<template>
  <header class="w-100 flex gap-5 p-2 bg-slate-800 rounded-lg">
    <div class="card flex justify-center">
      <UInput
          v-model="q"
          name="q"
          placeholder="Search..."
          icon="i-heroicons-magnifying-glass-20-solid"
          autocomplete="off"
          :ui="{ icon: { trailing: { pointer: '' } } }"
      >
        <template #trailing>
          <UButton
              v-show="q !== ''"
              color="gray"
              variant="link"
              icon="i-heroicons-x-mark-20-solid"
              :padded="false"
              @click="q = ''"
          />
        </template>
      </UInput>
    </div>
    <div class="flex gap-1">
      <NuxtLink to="https://vk.com" class="h-[24px]" target="_blank">
        <icon name="i-mdi:vk" size="24px"/>
      </NuxtLink>
    </div>
  </header>
</template>

<style scoped>

</style>