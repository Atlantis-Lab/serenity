import { PublicApi }    from '@ory/kratos-client'
import { serialize }   from 'cookie'

import { flowIdGuard } from '../utils'

export const login = async (req, res, next) => {
  const kratos: PublicApi = req.kratos
  const { flow }: { flow: string } = req.query

  console.log('Initialized. Flow is',flow)

  flowIdGuard(flow, res, 'login')

  console.log('Guard passed, flow is',flow)

  kratos
    .getSelfServiceLoginFlow(flow)
    .then(({ status, data }) => {
      if (status !== 200) Promise.reject(flow)
      const csrfToken = data.methods.password.config.fields
        .filter((field) => field.name === 'csrf_token')[0]
        .value.toString()
      res.setHeader('Set-Cookie', serialize('csrf_token', csrfToken), {
        expires: new Date(Date.now() + 10000),
      })
      next()
    })
    .catch((err) => res.json(err))
}
