import type { E } from 'vitest/dist/types-198fd1d9.js'

export interface IUserStore {
  sub: string
  email: string
  picture: string
  firstName: string
  lastName: string
  emails: IUserEmails[]
}

export interface IUserEmails {
  id: string
  firstName: string
  lastName: string
  fromEmail: Email
  toEmail: Email
  subject: string
  body: string
  hasViewed: boolean
  createdAt: DateIso
}

export interface ISendEmailData {
  firstName: string
  lastName: string
  fromEmail: Email
  toEmail: Email
  subject: string
  body: string
  hasViewed: boolean
  createdAt: DateIso
}
