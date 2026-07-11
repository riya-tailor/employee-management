<template>
<div v-if="store.loading" class="text-center text-xl">Loading...</div>
<div v-if="store.error" class="text-red-500">{{ store.error }}</div>

<div>
  <h1 class="text-3xl font-bold mb-6">Dashboard</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
    <DashboardCard title="Employees" :value="totalEmployees" />
    <DashboardCard title="Active" :value="activeEmployees" />
    <DashboardCard title="Inactive" :value="inactiveEmployees" />
    <DashboardCard title="Departments" :value="departments" />
  </div>
  <div>
    <RecentEmployeeTable :employees="store.employees" />
  </div>
</div>
</template>

<script setup>
import {onMounted,computed} from 'vue'
import DashboardCard from '../components/common/DashboardCard.vue'
import RecentEmployeeTable from '../components/employee/RecentEmployeeTable.vue'
import {useEmployeeStore} from '../stores/employeeStore'

const store=useEmployeeStore()
onMounted(()=>{
  store.fetchEmployees()
})

const totalEmployees=computed(()=>store.employees.length)
const activeEmployees=computed(()=>{
  return store.employees.filter(item=>item.status==="Active").length
})

const inactiveEmployees=computed(()=>{
  return store.employees.filter(item=>item.status==="Inactive").length
})

const departments=computed(()=>{
  const dept=[...new Set(store.employees.map(item=>item.department))]
  return dept.length
})

</script>