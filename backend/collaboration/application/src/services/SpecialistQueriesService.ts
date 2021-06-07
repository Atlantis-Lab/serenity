import { Injectable }       from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository }       from 'typeorm'

import { Specialist }       from '@collaboration/persistence'

interface PageInfo {
  hasNext: boolean
}

interface FindAllResponse<T> {
  rows: T[]
  pageInfo: PageInfo
}

@Injectable()
export class SpecialistQueriesService {
  constructor(
    @InjectRepository(Specialist)
    private readonly specialistRepository: Repository<Specialist>
  ) {}

  async findAll(pager?: any, filters?: any): Promise<FindAllResponse<Specialist>> {
    const qb = await this.specialistRepository.createQueryBuilder('specialist')

    if (filters) {
      if (filters.id && filters.id.length > 0) {
        qb.andWhere('specialist.id IN (:...id)', { id: filters.id })
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
