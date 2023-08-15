import { defineStore } from 'pinia'
import axios from 'axios'
import type { IGoogleLoginCallbackData } from '@/shared/types/google-login-callback'

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
    async getUserDetailsFromGoogle(data: IGoogleLoginCallbackData) {
      const res = await axios.post('api/google-login', {
        token: data.credential
      })
      this.$state.sub = res.data.sub
      this.$state.email = res.data.email
      this.$state.picture = res.data.picture
      this.$state.firstName = res.data.given_name
      this.$state.lastName = res.data.family_name
    },
    clearUser() {
      this.$state.sub = ''
      this.$state.email = ''
      this.$state.picture = ''
      this.$state.firstName = ''
      this.$state.lastName = ''
      this.$state.emails = []
    }
  },
  persist: true
})
