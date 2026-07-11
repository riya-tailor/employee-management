<template>
    <table class="w-full mt-10">
        <thead>
            <tr class="bg-gray-200">
                <th>Name</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr
            v-for="employee in employees"
            :key="employee.id"
            >
            <td>{{ employee.name }}</td>
            <td>{{ employee.department }}</td>
            <td>{{ employee.designation }}</td>
            <td>{{ employee.status }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>

defineProps({
employees:Array
})

</script>