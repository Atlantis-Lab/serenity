import { HandlesMessage }             from '@monstrs/nestjs-bus'

import { ReviewCreated }              from '@collaboration/domain'
import { SpecialistEntityRepository } from '@collaboration/persistence'
import { Handler }                    from '@node-ts/bus-core'

import { ReviewQueriesService }       from '../services'

@HandlesMessage(ReviewCreated)
export class RecalculateRatingHandler implements Handler<ReviewCreated> {
  constructor(
    private readonly reviewService: ReviewQueriesService,
    private readonly specialistRepository: SpecialistEntityRepository
  ) {}

  async handle(event: ReviewCreated): Promise<void> {
    const { rows: reviews } = await this.reviewService.findAll(null, {
      specialistId: [event.specialistId],
    })

    const total = reviews.reduce((result, review) => result + review.rating, 0)
    const count = reviews.length

    const rating = Math.round(total / count)

    const specialist = await this.specialistRepository.getById(event.specialistId)

    specialist.updateRating(rating)

    await this.specialistRepository.save(specialist)
  }
}
