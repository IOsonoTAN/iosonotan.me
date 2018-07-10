const routes = module.exports = require('next-routes')()

routes
  .add('about')
  .add('blog')
  .add('/blog/category/:category', 'blog')
  .add('/blog/tag/:tag', 'blog')
  .add('/blog/:objectId', 'blog-detail')
  .add('contact-me')
  .add('resume')
  .add('content')
  .add('/content/:objectId/edit', 'content-edit')
