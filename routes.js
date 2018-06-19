const routes = module.exports = require('next-routes')()

routes
  .add('about')
  .add('blog', '/blog')
  .add('blog-detail', '/blog/:objectId', 'blog-detail')
  .add('contact-me', '/contact-me', 'contact-me')
  .add('resume', '/resume', 'resume')
