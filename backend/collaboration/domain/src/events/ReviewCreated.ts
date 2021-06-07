import { Event } from '@node-ts/bus-messages'

export class ReviewCreated extends Event {
  static readonly NAME = 'collaboration/review-created'

  $name = ReviewCreated.NAME

  $version = 0

  constructor(
    readonly reviewId: string,
    readonly projectId: string,
    readonly replyId: string,
    readonly customerId: string,
    readonly specialistId: string,
    readonly rating: number,
    readonly comment: string
  ) {
    super()
  }
}
