import originalUrl  from 'original-url'
import {
  LoginFlow,
  RecoveryFlow,
  RegistrationFlow,
  SettingsFlow,
  VerificationFlow,
} from '@ory/kratos-client'
import { Response } from 'express'
import { format }   from 'url'

export const getRedirectUrl = (req) => {
  if (process.env.DEFAULT_REDIRECT_URL) {
    return process.env.DEFAULT_REDIRECT_URL
  }

  const url = originalUrl(req)

  if (url) {
    return format({
      ...url,
      pathname: '/',
      hostname: url.hostname.replace('accounts', 'cabinet'),
    })
  }

  return ''
}

export const getState = (req) => {
  const state: any = { target: req._parsedUrl.pathname } // eslint-disable-line no-underscore-dangle

  if (req.query.continue) {
    state.continue = req.query.continue
  }

  return Buffer.from(JSON.stringify(state)).toString('base64')
}

export const getMethodConfig = (
  flow: LoginFlow | RegistrationFlow | RecoveryFlow | SettingsFlow | VerificationFlow,
  key: string
) => {
  if (flow.active && flow.active !== key) {
    return {}
  }

  if (!flow.methods[key]) {
    return {}
  }

  return flow.methods[key].config
}

export const isType = <T>(obj: T): obj is T => !!obj

export const flowIdGuard = (flowId: any, res: Response, flowType: string): void => {
  if (!flowId || !isType<string>(flowId)) {
    if (flowType === 'logout') {
      res.redirect(`${process.env.KRATOS_BROWSER_URL}self-service/browser/flows/${flowType}`)
    }
    res.redirect(`${process.env.KRATOS_BROWSER_URL}self-service/${flowType}/browser`)
  }
}
