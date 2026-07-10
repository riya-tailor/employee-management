import {defineStore} from 'pinia'
import { loginUser } from '../services/authService'

export const useAuthStore=defineStore('auth',{
    state:()=>({
        user: null,
        token: localStorage.getItem('token') || '',
        isLoggedIn: !!localStorage.getItem('token')
        // isLogin:false
    }),
    actions: {
        async login(email, password) {
          const users = await loginUser(email, password)
    
          if (users.length) {
            this.user = users[0]
    
            this.token = 'dummy-token'
    
            this.isLoggedIn = true
    
            localStorage.setItem('token', this.token)
    
            localStorage.setItem('user', JSON.stringify(users[0]))
    
            return true
          }
    
          return false
        },
    
        logout() {
          this.user = null
          this.token = ''
          this.isLoggedIn = false
    
          localStorage.removeItem('token')
          localStorage.removeItem('user')
        }
      }

})