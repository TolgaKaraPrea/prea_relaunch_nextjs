// const nextTranslate = require('next-translate')
module.exports = {
  // ...nextTranslate(),
  // reactStrictMode: true,
  images: {
    domains: ['storage.googleapis.com'],
  },
  i18n: {
    locales: ['en-US', 'de-DE'],
    defaultLocale: 'en-US',
    localeDetection: true,
  },
}
