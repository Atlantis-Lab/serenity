import { Uuid }  from '@node-ts/ddd-types'

import { Event } from '@node-ts/bus-messages'

export class FileCreated extends Event {
  static readonly NAME = 'files/file-created'

  $name = FileCreated.NAME

  $version = 0

  constructor(
    readonly fileId: Uuid,
    readonly type: string,
    readonly name: string,
    readonly url: string
  ) {
    super()
  }
}
