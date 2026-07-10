<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">

    <div class="bg-white p-8 rounded shadow w-96">

      <h2 class="text-2xl font-bold mb-5">
        Login
      </h2>

      <input
        v-model="email"
        placeholder="Email"
        class="border p-2 w-full mb-3 rounded"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="border p-2 w-full mb-3 rounded"
      />

      <button
        @click="login"
        class="bg-blue-600 text-white w-full p-2 rounded"
      >
        Login
      </button>

      <p
        v-if="error"
        class="text-red-500 mt-3"
      >
        {{ error }}
      </p>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

const email = ref('')
const password = ref('')
const error = ref('')

const router = useRouter()

const auth = useAuthStore()

const login = async () => {
  error.value = ''

  const success = await auth.login(
    email.value,
    password.value
  )

  if (success) {
    router.push('/dashboard')
  } else {
    error.value = 'Invalid Email or Password'
  }
}
</script>