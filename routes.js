const routes = module.exports = require('next-routes')()

routes
  .add('about')
  .add('blog', '/blog/:slug')
  .add('contact-me', '/contact-me', 'contact-me')
  .add('resume', '/resume', 'resume')
