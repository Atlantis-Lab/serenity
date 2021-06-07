import { Injectable }       from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository }       from 'typeorm'

import { Project }          from '@collaboration/persistence'

interface PageInfo {
  hasNext: boolean
}

interface FindAllResponse<T> {
  rows: T[]
  pageInfo: PageInfo
}

@Injectable()
export class ProjectQueriesService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>
  ) {}

  async findAll(pager?: any, filters?: any): Promise<FindAllResponse<Project>> {
    const qb = await this.projectRepository.createQueryBuilder('project')

    if (filters) {
      if (filters.id && filters.id.length > 0) {
        qb.andWhere('project.id IN (:...id)', { id: filters.id })
      }

      if (filters.customerId && filters.customerId.length > 0) {
        qb.andWhere('project.customerId IN (:...customerId)', {
          customerId: filters.customerId,
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
