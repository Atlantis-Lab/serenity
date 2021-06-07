import { Injectable }       from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository }       from 'typeorm'

import { Review }           from '@collaboration/persistence'

interface PageInfo {
  hasNext: boolean
}

interface FindAllResponse<T> {
  rows: T[]
  pageInfo: PageInfo
}

@Injectable()
export class ReviewQueriesService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>
  ) {}

  async findAll(pager?: any, filters?: any): Promise<FindAllResponse<Review>> {
    const qb = await this.reviewRepository.createQueryBuilder('review')

    if (filters) {
      if (filters.id && filters.id.length > 0) {
        qb.andWhere('review.id IN (:...id)', { id: filters.id })
      }

      if (filters.projectId && filters.projectId.length > 0) {
        qb.andWhere('review.projectId IN (:...projectId)', {
          projectId: filters.projectId,
        })
      }

      if (filters.specialistId && filters.specialistId.length > 0) {
        qb.andWhere('review.specialistId IN (:...specialistId)', {
          specialistId: filters.specialistId,
        })
      }
    }

    if (pager) {
      qb.skip(pager.offset || 0).take((pager.take || 25) + 1)
    }

    const rows = await qb.getMany()

    return {
      rows,
      pageInfo: {
        hasNext: qb.expressionMap.take ? rows.length >= qb.expressionMap.take : false,
      },
    }
  }
}
