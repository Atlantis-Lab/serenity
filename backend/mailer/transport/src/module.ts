import AWS           from 'aws-sdk'
import { Module }    from '@nestjs/common'

import { Transport } from './Transport'

const getMailhogOptions = () => ({
  host: 'mailhog',
  port: 1025,
  secure: false,
  auth: {
    user: 'user',
    pass: 'pass',
  },
})

const getSesOptions = () => ({
  SES: new AWS.SES({
    apiVersion: '2010-12-01',
    region: process.env.SES_REGION,
    accessKeyId: process.env.SES_KEY,
    secretAccessKey: process.env.SES_SECRET,
  }),
})

const transport = {
  provide: Transport,
  useFactory: () =>
    new Transport(
      process.env.SENDER || 'no-reply@example.com',
      process.env.NODE_ENV === 'production' ? getSesOptions() : getMailhogOptions()
    ),
}

@Module({
  providers: [transport],
  exports: [transport],
})
export class TransportModule {}
