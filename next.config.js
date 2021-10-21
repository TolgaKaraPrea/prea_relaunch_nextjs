const nextTranslate = require('next-translate');

module.exports = {
  ...nextTranslate(),

  images: {
    domains: ['storage.googleapis.com'],
  },
}
