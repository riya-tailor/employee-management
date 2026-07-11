<template>
    <div class="bg-white shadow rounded p-6">
        <h3 class="text-gray-500">{{ title }}</h3>
        <p class="text-3xl font-bold mt-3">{{ value }}</p>
    </div>
</template>
<script setup>
defineProps({
    title:String,
    value:[String,Number]
})
</script>

