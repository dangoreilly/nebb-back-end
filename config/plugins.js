module.exports = ({env}) => ({
    // ...
    upload: {
      config: {
        provider: "strapi-provider-upload-do", 
        providerOptions: {
          key: env('DO_SPACE_ACCESS_KEY'),
          secret: env('DO_SPACE_SECRET_KEY'),
          endpoint: env('DO_SPACE_ENDPOINT'),
          space: env('DO_SPACE_BUCKET'),
          directory: env('DO_SPACE_DIRECTORY'),
          cdn: env('DO_SPACE_CDN'),
        }
      },
    }, 
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