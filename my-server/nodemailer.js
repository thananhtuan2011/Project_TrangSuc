const nodemailer = require('nodemailer')
const {google} =require('googleapis')
const CLIENT_ID ='372271044067-j2e2101m1gf6rrjd9n5rop05m55bje99.apps.googleusercontent.com'
const CLIENT_SECRET ='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'
const REDIRECT_URI ='https://developers.google.com/oauthplayground'
const REFRESH_TOKEN ='1//04KJP0PDCg6k-CgYIARAAGAQSNwF-L9Ir9iWpgMyT3acespnS4D7N12LEgsVDLs705GR6aHmDhggUaWajZ3cOAvbqeCzeKNVuuMM'
// const OAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
// google.options({ auth: OAuth2Client });

// OAuth2Client.setCredentials({refresh_token : REFRESH_TOKEN})

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type : 'OAuth2',
      user: 'quang2003132311@gmail.com',
      pass: 'Quang20032311',
      clientId: CLIENT_ID,
      clientSecret : CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
    }
  });

  module.exports={transporter}