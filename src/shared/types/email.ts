export type EmailId = Brand<Id, 'EmailId'>

export interface IEmail {
  id: EmailId
  body: string
  createdAt: string
  firstName: string
  fromEmail: string
  lastName: string
  subject: string
  hasViewed: boolean
  toEmail: Email
}

export interface ISendEmailData {
  toEmail: Email
  subject: string
  body: string
}
