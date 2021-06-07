/* eslint-disable @typescript-eslint/no-unused-vars */

import { PublicApi }   from '@ory/kratos-client'

import { flowIdGuard } from '../utils'

export const recovery = (req, res, next) => {
  const kratos: PublicApi = req.kratos
  const { flow }: { flow: string } = req.query

  flowIdGuard(flow, res, 'recovery')

  kratos
    .getSelfServiceRecoveryFlow(flow)
    .then(({ status, data }) => {
      if (status !== 200) Promise.reject(flow)
      next()
    })
    .catch((err) => res.json(err))
}
