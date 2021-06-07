import express        from 'express'
import mjml2html      from 'mjml'
import path           from 'path'
import next           from 'next'

import { getSending } from './services'

const bootstrap = async () => {
  const app = next({
    dev: process.env.NODE_ENV !== 'production',
    dir: process.env.NODE_ENV !== 'production' ? path.join(__dirname, '../src') : __dirname,
  })

  const handle = app.getRequestHandler()

  await app.prepare()

  const server = express()

  server.get('/_render/:template', async (req, res) => {
    const webVersionUrl = `${process.env.WEB_VERSION_URL}/${req.query.sendingId}`

    const result = await app.renderToHTML(req, res, `/${req.params.template}`, {
      ...req.query,
      webVersionUrl,
    })

    try {
      const { html } = mjml2html(result, {
        validationLevel: 'strict',
        keepComments: false,
        beautify: false,
        minify: true,
      })

      res.send(html)
    } catch (error) {
      console.log(error) // eslint-disable-line no-console

      res.send(result)
    }
  })

  server.get('/s/:id', async (req, res) => {
    const { id, template, payload }: any = await getSending(req.params.id)

    const webVersionUrl = `${process.env.WEB_VERSION_URL}/${id}`
    const data = payload ? JSON.parse(payload) : {}

    const result = await app.renderToHTML(req, res, `/${template}`, {
      ...data,
      webVersionUrl,
    })

    try {
      const { html } = mjml2html(result, {
        validationLevel: 'strict',
        keepComments: false,
        beautify: false,
        minify: true,
      })

      res.send(html)
    } catch (error) {
      console.log(error) // eslint-disable-line no-console

      res.send(result)
    }
  })

  server.get('*', (req, res) => handle(req, res))

  server.listen(process.env.PORT || 3000)
}

bootstrap()
