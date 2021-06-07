/* eslint-disable class-methods-use-this */
import { AggregateRootProperties } from '@node-ts/ddd-types'
import { format, parse }           from 'url'

import { AggregateRoot }           from '@node-ts/ddd'

import { UploadCreated }           from '../events'
import { File }                    from './File'

export interface UploadField {
  key: string
  value: string
}

export interface UploadProperties extends AggregateRootProperties {
  type: string

  name: string

  url: string

  fields: UploadField[]
}

export class Upload extends AggregateRoot implements UploadProperties {
  type: string

  name: string

  url: string

  fields: UploadField[]

  static create(
    id: string,
    type: string,
    name: string,
    url: string,
    fields: UploadField[]
  ): Upload {
    const upload = new Upload(id)

    upload.when(new UploadCreated(id, type, name, url, fields))

    return upload
  }

  confirm() {
    const url = format({
      ...parse(this.url),
      search: null,
    })

    const file = File.create(this.id, this.type, this.name, url)

    return file
  }

  protected whenUploadCreated(event: UploadCreated): void {
    this.type = event.type
    this.name = event.name
    this.url = event.url
    this.fields = event.fields
  }
}
