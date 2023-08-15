/* eslint-disable no-undef */
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const { OAuth2Client } = require('google-auth-library')

const client = new OAuth2Client(
  '565535016155-qcvpltqcqm7l8fl6f5puo9gmmsaqqm0r.apps.googleusercontent.com'
)

app.use(bodyParser.json())
app.use(cors())

app.post('http://localhost:4001/api/google-login', async (req, res) => {
  const ticket = await client.verifyIdToken({
    idToken: req.body.tokenId
  })

  res.status(200).json(ticket.getPayload())
})

app.listen(4001, () => console.log('Server started on port 4001'))
