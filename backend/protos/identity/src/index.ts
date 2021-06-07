import grpc                           from 'grpc'
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
import path                           from 'path'
import { ClientOptions, Transport }   from '@nestjs/microservices'
import { loadSync }                   from '@grpc/proto-loader'

import { PROTO_PATH as COMMON_PROTO } from '@protos/common'

import { name }                       from '../package.json'

declare const __non_webpack_require__: any

const protosPath = path.dirname(
  (typeof __non_webpack_require__ !== 'undefined' ? __non_webpack_require__ : require).resolve(name)
)

export const PROTO_PATH = path.join(protosPath, '../identity.proto')

export const clientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'identity',
    url: process.env.IDENTITY_SERVICE_URL || 'identity-service:50051',
    protoPath: PROTO_PATH,
    loader: {
      arrays: true,
      includeDirs: [COMMON_PROTO],
    },
  },
}

export const serverOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'identity',
    url: '0.0.0.0:50051',
    protoPath: PROTO_PATH,
    loader: {
      arrays: true,
      includeDirs: [COMMON_PROTO],
    },
  },
}

export const createIdentityService = () => {
  const packageDefinition = loadSync(clientOptions.options.protoPath, clientOptions.options.loader)
  const { identity }: any = grpc.loadPackageDefinition(packageDefinition)

  return new identity.IdentityService(clientOptions.options.url, grpc.credentials.createInsecure())
}
