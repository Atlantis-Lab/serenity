import uuid              from 'uuid/v4'
/* eslint-disable class-methods-use-this */
import { AggregateRoot } from '@node-ts/ddd'

import { ChatCreated }   from '../events'

export class Chat extends AggregateRoot {
  customerId: string

  specialistId: string

  discussionId: string

  static create(customerId: string, specialistId: string, discussionId: string) {
    const chat = new Chat(uuid())

    chat.when(new ChatCreated(chat.id, customerId, specialistId, discussionId))

    return chat
  }

  protected whenChatCreated(event: ChatCreated): void {
    this.customerId = event.customerId
    this.specialistId = event.specialistId
    this.discussionId = event.discussionId
  }
}
