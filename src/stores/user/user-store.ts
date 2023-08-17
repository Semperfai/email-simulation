import axios from 'axios'
import moment from 'moment'
import { v4 as uuid } from 'uuid'
import type { IGoogleLoginCallbackData } from '@/shared/types/google-login-callback'
import { db } from '@/shared/config/firebase-init'
import {
  collection,
  query,
  where,
  doc,
  onSnapshot,
  setDoc,
  deleteDoc,
  getDoc,
  orderBy
} from 'firebase/firestore'
import { defineStore } from 'pinia'
import { type IUserStore, type IUserEmails } from './types'
import { type ISendEmailData, type EmailId, type IEmail } from '@/shared/types/email'

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
    async sendEmail(data: ISendEmailData): Promise<void> {
      try {
        await setDoc(doc(db, 'emails/' + uuid()), {
          firstName: this.$state.firstName,
          lastName: this.$state.lastName,
          fromEmail: this.$state.email,
          toEmail: data.toEmail,
          subject: data.subject,
          body: data.body,
          hasViewed: false,
          createdAt: Date.now()
        })
      } catch (error: Error | unknown) {
        console.log(error)
      }
    },
    async getEmailsByEmailAddress(): Promise<void> {
      const q = query(
        collection(db, 'emails'),
        where('toEmail', '==', this.$state.email),
        orderBy('createdAt', 'desc')
      )

      onSnapshot(
        q,
        (querySnapshot) => {
          const result: IUserEmails[] = []
          querySnapshot.forEach((doc) => {
            result.push({
              id: doc.id,
              firstName: doc.data().firstName,
              lastName: doc.data().lastName,
              fromEmail: doc.data().email,
              toEmail: doc.data().toEmail,
              subject: doc.data().subject,
              body: doc.data().body,
              hasViewed: doc.data().hasViewed,
              createdAt: moment(doc.data().createdAt).format('MMM D HH:mm')
            })
          })
          this.$state.emails = result
        },
        (error: Error) => {
          console.log(error)
        }
      )
    },
    async getUserDetailsFromGoogle(data: IGoogleLoginCallbackData): Promise<void> {
      const res = await axios.post('api/google-login', {
        token: data.credential
      })
      this.$state.sub = res.data.sub
      this.$state.email = res.data.email
      this.$state.picture = res.data.picture
      this.$state.firstName = res.data.given_name
      this.$state.lastName = res.data.family_name
    },
    async deleteEmail(id: EmailId): Promise<void> {
      try {
        await deleteDoc(doc(db, 'emails', id))
      } catch (e: Error | unknown) {
        console.log(e)
      }
    },

    async getEmailById(id: EmailId): Promise<IEmail | undefined> {
      const docRef = doc(db, 'emails', id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return {
          id: id,
          body: docSnap.data().body,
          createdAt: moment(docSnap.data().createdAt).format('MMM D HH:mm'),
          firstName: docSnap.data().firstName,
          fromEmail: docSnap.data().fromEmail,
          lastName: docSnap.data().lastName,
          subject: docSnap.data().subject,
          toEmail: docSnap.data().toEmail,
          hasViewed: docSnap.data().hasViewed
        }
      } else {
        console.log('No such document!')
      }
    },

    async emailHasBeenViewed(id: EmailId): Promise<void> {
      try {
        await setDoc(
          doc(db, 'emails/' + id),
          {
            hasViewed: true
          },
          { merge: true }
        )
      } catch (error) {
        console.log(error)
      }
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
