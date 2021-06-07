import { Event } from '@node-ts/bus-messages'

export class DiscussionCreated extends Event {
  static readonly NAME = 'collaboration/discussion-created'

  $name = DiscussionCreated.NAME

  $version = 0

  constructor(
    readonly discussionId: string,
    readonly specialistId: string,
    readonly customerId: string
  ) {
    super()
  }
}
