module.exports = ({env}) => ({
    // ...
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'danieloreilly@nebb.ie',
          defaultReplyTo: 'danieloreilly@nebb.ie',
          testAddress: 'danieloreilly@nebb.ie',
        },
      },
    },
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET')
      },
    },
    // ...
  })
