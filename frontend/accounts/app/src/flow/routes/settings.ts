import { PublicApi }    from '@ory/kratos-client'
import { serialize }   from 'cookie'

import { flowIdGuard } from '../utils'

export const settings = async (req, res, next) => {
  const { publicApi: kratos }: { publicApi: PublicApi } = req.kratos
  const { flow }: { flow: string } = req.query

  flowIdGuard(flow, res, 'settings')

  kratos
    .getSelfServiceSettingsFlow(flow)
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
