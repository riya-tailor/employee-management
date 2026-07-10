import api from './api'

export const loginUser = async(email,password) => {
    alert('hiicd')
    // const response = await api.get(`/users?email=${email}&password=${password}`)
        const response = await api.get('/users',{
        params: {email,password }
    })
    alert('hii')
    return response.data
}