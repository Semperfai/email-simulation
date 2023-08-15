import { defineStore } from 'pinia'
import axios from 'axios'

interface IUserStore {
  sub: string
  email: string
  picture: string
  firstName: string
  lastName: string
  emails: string[]
}

axios.defaults.baseURL = 'http://localhost:4001/'

export const useUserStore = defineStore('user', {
  state: (): IUserStore => ({
    sub: '',
    email: '',
    picture: '',
    firstName: '',
    lastName: '',
    emails: []
  }),
  actions: {
    async getUserDetailsFromGoogle(data) {
      const res = await axios.post('/api/google-login', {
        token: data?.credentials
      })
      //todo change family dates
      this.$state.sub = res.data.sub
      this.$state.email = res.data.email
      this.$state.picture = res.data.picture
      this.$state.firstName = res.data.firstName
      this.$state.lastName = res.data.lastName
    }
  },
  persist: true
})
