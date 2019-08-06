const router = require('express').Router()
const nodemailer = require('nodemailer')

module.exports = router

router.post('/', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Name: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `

    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      // secure: true, // use SSL
      auth: {
        user: 'gerson66@ethereal.email',
        pass: 'BVWZTwU96RnErwwYQF'
      }
      // tls: {
      //   rejectUnauthorized: false
      // }
    })

    let mailOption = {
      from: 'test@testaccount.com',
      to: 'gerson66@ethereal.email',
      replyTo: 'test@testaccount.com',
      subject: 'new message',
      text: req.body.message,
      html: htmlEmail
    }

    if (err) {
      console.log(err)
    }

    transporter.sendMail(mailOption, (err, info) => {
      if (err) {
        return console.log(err)
      }
      console.log('Message sent: %s', info.message)
      console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))

      res.render('contact', {msg: 'email has been sent'})
    })
  })
})
