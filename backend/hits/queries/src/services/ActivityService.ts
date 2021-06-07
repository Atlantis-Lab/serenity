import { Injectable }       from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository }       from 'typeorm'

import { Activity }         from '@hits/persistence'

interface PageInfo {
  hasNext: boolean
}

interface FindAllResponse<T> {
  rows: T[]
  pageInfo: PageInfo
}

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>
  ) {}

  async findAll(filters: any): Promise<FindAllResponse<Activity>> {
    const qb = await this.activityRepository.createQueryBuilder('activity')

    if (filters) {
      if (filters.id && filters.id.length > 0) {
        qb.andWhere('activity.id IN (:...id)', { id: filters.id })
      }
    }

    const rows = await qb.getMany()

    return {
      rows,
      pageInfo: {
        hasNext: false,
      },
    }
  }
}
