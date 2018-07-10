const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/blog/:objectId', (req, res) => {
    const actualPage = '/blog-detail'
    const queryParams = { objectId: req.params.objectId }

    app.render(req, res, actualPage, queryParams)
  })

  server.get('/blog/category/:category', (req, res) => {
    const actualPage = '/blog'
    const queryParams = { category: req.params.category }

    app.render(req, res, actualPage, queryParams)
  })

  server.get('/blog/tag/:tag', (req, res) => {
    const actualPage = '/blog'
    const queryParams = { tag: req.params.tag }

    app.render(req, res, actualPage, queryParams)
  })

  server.get('/content/:objectId/edit', (req, res) => {
    const actualPage = '/content-edit'
    const queryParams = { objectId: req.params.objectId }

    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
