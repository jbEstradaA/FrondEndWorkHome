Page = require('astrolabe').Page

module.exports = Page.create
  url: get: -> browser.baseUrl + '#/cities'

  cityCreationLink: get: -> element(By.css('[href="#/cities/create"]'))
