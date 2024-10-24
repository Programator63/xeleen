<script setup lang="ts">
definePageMeta({
  layout: 'empty',
  middleware: [
    'un-auth',
  ]
})
useHead({
  title: 'Sign up',
})


import {object, string, type InferType} from 'yup'
import type {FormSubmitEvent} from '#ui/types'

const schema = object({
  name: string()
      .min(2, 'Must be at least 2 characters')
      .required("Required"),
  lastname: string()
      .min(2, 'Must be at least 2 characters')
      .required("Required"),
  email: string().email('Invalid email').required('Required'),
  password: string()
      .min(8, 'Must be at least 8 characters')
      .required('Required'),
  passwordRepetition: string()
      .min(8, 'Must be at least 8 characters')
      .required('Required')
})
type Schema = InferType<typeof schema>
const toast = useToast()
const state = reactive({
  name: undefined,
  lastname: undefined,
  email: undefined,
  password: undefined,
  passwordRepetition: undefined,
})
const blockButton = ref(false)

async function onSubmit(event: FormSubmitEvent<Schema>) {

  if (state.password != state.passwordRepetition) {
    state.passwordRepetition = ""
    return toast.add({
      title: "passwords don't match!",
      color: "red",
    })
  }
  blockButton.value = true
  const {data, status, error} = await useFetch("/api/user/auth/register", {
        method: 'POST',
        body: {...event.data}
      }
  )
  blockButton.value = false
  if (status.value != "success") {
    return toast.add({
      title: error.value.statusMessage,
      color: "red",
    })
  }
  toast.add({
    text: data.value.text,
    color: "green",
  })
}


</script>

<template>
  <main class="bg-gray-100 dark:bg-slate-800 rounded-xl p-2 pt-5 form">
    <p class="text-center text-2xl font-bold">
      Sign up
    </p>
    <UForm :schema="schema" :state="state" class="p-5" @submit="onSubmit">
      <div class="flex gap-x-4">
        <UFormGroup label="Name" name="name" size="xl" class="w-full" required>
          <UInput v-model="state.name"/>
        </UFormGroup>
        <UFormGroup label="Last name" name="lastname" size="xl" class="w-full" required>
          <UInput v-model="state.lastname"/>
        </UFormGroup>
      </div>
      <UFormGroup label="Email" name="email" size="xl" required>
        <UInput v-model="state.email"/>
      </UFormGroup>

      <UFormGroup label="Password" name="password" required>
        <UInput v-model="state.password" type="password" size="xl"/>
      </UFormGroup>

      <UFormGroup label="Password repetition" name="passwordRepetition" required>
        <UInput v-model="state.passwordRepetition" type="password" size="xl"/>
      </UFormGroup>

      <div class="mt-6">
        <UButton size="xl" color="indigo" block type="submit" :loading="blockButton"
                 class="hover:shadow-md bg-indigo-500 hover:shadow-indigo-500/50 transition-all text-gray-400 hover:text-white font-medium px-2 py-3 rounded-lg">
          Sign up
        </UButton>
        <p class="text-center mt-2">
          Or
          <NuxtLink to="/login" class="text-indigo-500">login in</NuxtLink>
        </p>
      </div>
    </UForm>

  </main>

</template>

<style scoped>
.form {
  width: 500px !important;
  height: fit-content;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

form {
  display: flex;
  gap: 1rem;
  flex-direction: column;
}

form button {
  color: white !important;
}
</style>