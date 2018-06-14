const routes = module.exports = require('next-routes')()

routes
  .add('about')
  .add('blog', '/blog/:slug')
  .add('contact-me', '/contact-me', 'contact-me')
  .add('resume', '/resume', 'resume')
  // .add('user', '/user/:id', 'profile')
  // .add('/:noname/:lang(en|es)/:wow+', 'complex')
  // .add({
  //   name: 'beta',
  //   pattern: '/v3',
  //   page: 'v3'
  // })
