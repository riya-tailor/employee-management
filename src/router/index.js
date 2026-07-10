import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '../layouts/DefaultLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'

import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import EmployeeList from '../views/EmployeeList.vue'
import AddEmployee from '../views/AddEmployee.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'login',
//     component: Login,
//   }
// ]

const routes=[

  {
  path:'/',
  component:AuthLayout,
  
  children:[
  {
  path:'login',
  component:Login
  }
  ]
  
  },
  
  {
  path:'/',
  component:DefaultLayout,
  
  children:[
  
  {
  path:'dashboard',
  component:Dashboard
  },
  
  {
  path:'employees',
  component:EmployeeList
  },
  
  {
  path:'employees/add',
  component:AddEmployee
  }
  
  ]
  
  }
  
  ]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  if (to.path !== '/login' && !token) {
    next('/login')
  } else {
    next()
  }
})

export default router