/* eslint-disable @typescript-eslint/no-unused-expressions */

import { getKratosSession } from '@atls/kratos-session'

export const redirect = async (req, res, next) => {
  getKratosSession()
    .then((session) => {
      if (!session) Promise.reject(session)
      next()
    })
    .catch((err) => {
      err.status === 404 ? res.json(err) : res.redirect('/login')
    })
}
