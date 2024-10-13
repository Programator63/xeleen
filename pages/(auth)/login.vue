<script setup lang="ts">
definePageMeta({
  title: 'Login',
  layout: 'empty'
})
const route = useRoute()


import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string()
      .min(8, 'Must be at least 8 characters')
      .required('Required')
})
type Schema = InferType<typeof schema>

const state = reactive({
  email: undefined,
  password: undefined
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data)
}

</script>

<template>
  <main class="bg-gray-100 dark:bg-slate-800 rounded-xl p-2 form">


    <button @click="$router.back()"
            class="transition-all text-gray-400 hover:text-black dark:hover:text-white font-medium px-2 py-1 rounded-lg">
      Back
    </button>
    <p class="text-center text-2xl font-bold">
      Login in
    </p>
    <UForm :schema="schema" :state="state" class="space-y-4 p-5" @submit="onSubmit">
      <UFormGroup label="Email" name="email" size="xl">
        <UInput v-model="state.email"/>
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput v-model="state.password" type="password" size="xl"/>
      </UFormGroup>

      <div>
        <UButton size="xl" block type="submit" class="hover:shadow-md bg-indigo-500 hover:shadow-indigo-500/50 transition-all text-gray-400 hover:text-white font-medium px-2 py-3 rounded-lg">
          Login in
        </UButton>
        <p class="text-center mt-2">
          Or  <NuxtLink to="/register" class="text-indigo-500">sign up</NuxtLink>
        </p>
      </div>

    </UForm>

  </main>

</template>

<style scoped>
.form {
  width: 400px !important;
  height: fit-content;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
form{
  display: flex;
  gap: 20px;
  flex-direction: column;
}

form button{
  color: white !important;
}
</style>