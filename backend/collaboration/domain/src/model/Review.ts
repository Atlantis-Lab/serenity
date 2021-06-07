import uuid                        from 'uuid/v4'
import { AggregateRoot }           from '@node-ts/ddd'
/* eslint-disable class-methods-use-this */
import { AggregateRootProperties } from '@node-ts/ddd-types'

import { ReviewCreated }           from '../events'

export class Review extends AggregateRoot implements AggregateRootProperties {
  projectId: string

  replyId: string

  customerId: string

  specialistId: string

  rating: number

  comment: string

  static create(
    projectId: string,
    replyId: string,
    customerId: string,
    specialistId: string,
    rating: number,
    comment: string
  ) {
    const review = new Review(uuid())

    review.when(
      new ReviewCreated(review.id, projectId, replyId, customerId, specialistId, rating, comment)
    )

    return review
  }

  protected whenReviewCreated(event: ReviewCreated): void {
    this.projectId = event.projectId
    this.replyId = event.replyId
    this.customerId = event.customerId
    this.specialistId = event.specialistId
    this.rating = event.rating
    this.comment = event.comment
  }
}
