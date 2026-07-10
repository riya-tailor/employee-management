<template>
  <div class="bg-white shadow p-4 flex justify-between">

    <h2 class="font-bold">
      Employee Management
    </h2>

    <button
      @click="logout"
      class="bg-red-500 text-white px-4 py-2 rounded"
    >
      Logout
    </button>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/authStore'

const router = useRouter()

const auth = useAuthStore()

const logout = () => {
  auth.logout()
  router.push('/login')
}
</script>