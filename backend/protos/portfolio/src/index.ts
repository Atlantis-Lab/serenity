/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
import path                           from 'path'
import { ClientOptions, Transport }   from '@nestjs/microservices'

import { PROTO_PATH as COMMON_PROTO } from '@protos/common'

import { name }                       from '../package.json'

declare const __non_webpack_require__: any

const protosPath = path.dirname(
  (typeof __non_webpack_require__ !== 'undefined' ? __non_webpack_require__ : require).resolve(name)
)

export const PROTO_PATH = path.join(protosPath, '../portfolio.proto')

export const clientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'portfolio',
    url: process.env.PORTFOLIO_SERVICE_URL || 'portfolio-service:50051',
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
    package: 'portfolio',
    url: '0.0.0.0:50051',
    protoPath: PROTO_PATH,
    loader: {
      arrays: true,
      includeDirs: [COMMON_PROTO],
    },
  },
}
