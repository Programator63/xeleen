<script setup lang="ts">
const q = ref('')

</script>

<template>
  <header class="w-100 flex justify-between items-center gap-5 py-2 px-4 bg-slate-800 rounded-lg">
    <div class="flex justify-center">
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

    <div class="flex gap-2">
      <NuxtLink to="/login" class="hover:shadow-lg bg-gray-700 hover:shadow-gray-700/50 transition-all text-white font-medium px-3 py-2 rounded-lg">Login in</NuxtLink>
      <NuxtLink to="/register" class="hover:shadow-lg bg-indigo-500 hover:shadow-indigo-500/50 transition-all text-white font-medium px-3 py-2 rounded-lg">Sigh up</NuxtLink>
    </div>
  </header>
</template>

<style scoped>

</style>