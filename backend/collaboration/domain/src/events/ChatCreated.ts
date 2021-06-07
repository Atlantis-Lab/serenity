import { Event } from '@node-ts/bus-messages'

export class ChatCreated extends Event {
  static readonly NAME = 'collaboration/chat-created'

  $name = ChatCreated.NAME

  $version = 0

  constructor(
    readonly chatId: string,
    readonly customerId: string,
    readonly specialistId: string,
    readonly discussionId: string
  ) {
    super()
  }
}
