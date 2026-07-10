<template>
  <div class="flex min-h-screen">

    <Sidebar />

    <div class="flex-1">

      <Navbar />

      <main class="p-6 bg-gray-100 min-h-screen">
        <router-view />
      </main>

      <Footer />

    </div>

  </div>
</template>

<script setup>
import Sidebar from '../components/layout/Sidebar.vue'
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
</script>