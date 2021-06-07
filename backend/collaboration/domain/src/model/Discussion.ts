import uuid                  from 'uuid/v4'
/* eslint-disable class-methods-use-this */
import { AggregateRoot }     from '@node-ts/ddd'

import { DiscussionCreated } from '../events'
import { Message }           from './Message'

export class Discussion extends AggregateRoot {
  specialistId: string

  customerId: string

  static create(specialistId: string, customerId: string) {
    const discussion = new Discussion(uuid())

    discussion.when(new DiscussionCreated(discussion.id, specialistId, customerId))

    return discussion
  }

  message(authorId, content): Message {
    return new Message(uuid(), this.id, authorId, content)
  }

  protected whenDiscussionCreated(event: DiscussionCreated): void {
    this.specialistId = event.specialistId
    this.customerId = event.customerId
  }
}
