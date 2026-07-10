<template>
<div class="w-64 bg-gray-900 text-white min-h-screen">

<h2 class="text-2xl font-bold p-5">
EMS
</h2>

<nav>

<router-link to="/dashboard" class="block p-4 hover:bg-gray-700" active-class="bg-blue-500">
Dashboard
</router-link>

<router-link to="/employees" class="block p-4 hover:bg-gray-700" active-class="bg-blue-500">
Employees
</router-link>

<router-link to="/employees/add" class="block p-4 hover:bg-gray-700" active-class="bg-blue-500">
Add Employee
</router-link>

</nav>

</div>
</template>