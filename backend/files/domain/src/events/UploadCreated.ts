import { Uuid }        from '@node-ts/ddd-types'

import { Event }       from '@node-ts/bus-messages'

import { UploadField } from '../model'

export class UploadCreated extends Event {
  static readonly NAME = 'files/upload-created'

  $name = UploadCreated.NAME

  $version = 0

  constructor(
    readonly uploadId: Uuid,
    readonly type: string,
    readonly name: string,
    readonly url: string,
    readonly fields: UploadField[]
  ) {
    super()
  }
}
