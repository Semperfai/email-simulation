export const emailValidator = (email: string) => {
  // eslint-disable-next-line no-useless-escape
  const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  if (!filter.test(email)) {
    alert('Please provide a valid email address')
    return
  }
}
