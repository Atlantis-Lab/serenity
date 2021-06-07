/* eslint-disable @typescript-eslint/no-unused-vars */

import { PublicApi }   from '@ory/kratos-client'

import { flowIdGuard } from '../utils'

export const logout = async (req, res) => {
  const kratos: PublicApi = req.kratos
  const { flow }: { flow: string } = req.query

  flowIdGuard(flow, res, 'logout')

  kratos.initializeSelfServiceBrowserLogoutFlow().catch((err) => res.json(err))
}
