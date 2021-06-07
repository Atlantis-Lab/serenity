/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
import path     from 'path'

import { name } from '../package.json'

declare const __non_webpack_require__: any

const protosPath = path.dirname(
  (typeof __non_webpack_require__ !== 'undefined' ? __non_webpack_require__ : require).resolve(name)
)

export const PROTO_PATH = path.join(protosPath, '../common.proto')
