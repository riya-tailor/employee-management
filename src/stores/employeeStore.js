import { defineStore } from 'pinia'
import { getEmployees } from '../services/employeeService'

export const useEmployeeStore = defineStore('employee', {

  state: () => ({
    employees: [],
    loading: false,
    error: null
  }),

  actions: {
    async fetchEmployees() {
        this.loading = true
        try {
            this.employees = await getEmployees()
        } catch (error) {
            this.error = error.message
        } finally {
            this.loading = false
        }
    }
  }
})