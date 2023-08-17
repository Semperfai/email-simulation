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
