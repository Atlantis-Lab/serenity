import grpc         from 'grpc'
import path         from 'path'

import { loadSync } from '@grpc/proto-loader'

const PROTO_PATH = path.join(path.dirname(require.resolve('@protos/mailer')), '../mailer.proto')

const COMMON_PROTO = path.join(path.dirname(require.resolve('@protos/common')), '../common.proto')

const createMailerService = () => {
  const packageDefinition = loadSync(PROTO_PATH, {
    arrays: true,
    includeDirs: [COMMON_PROTO],
  })

  const { mailer }: any = grpc.loadPackageDefinition(packageDefinition)

  return new mailer.MailerService('mailer-service:50051', grpc.credentials.createInsecure())
}

const mailerService = createMailerService()

export const getSending = (id) =>
  new Promise((resolve, reject) => {
    mailerService.getSending({ id }, (error, response) => {
      if (error) {
        reject(error)
      } else {
        resolve(response)
      }
    })
  })
