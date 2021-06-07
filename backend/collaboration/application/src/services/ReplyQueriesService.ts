import { Injectable }       from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository }       from 'typeorm'

import { Reply }            from '@collaboration/persistence'

interface PageInfo {
  hasNext: boolean
}

interface FindAllResponse<T> {
  rows: T[]
  pageInfo: PageInfo
}

@Injectable()
export class ReplyQueriesService {
  constructor(
    @InjectRepository(Reply)
    private readonly replyRepository: Repository<Reply>
  ) {}

  async findAll(pager?: any, filters?: any): Promise<FindAllResponse<Reply>> {
    const qb = await this.replyRepository
      .createQueryBuilder('reply')
      .leftJoinAndSelect('reply.discussion', 'discussion')
      .leftJoinAndSelect('discussion.messages', 'messages')

    if (filters) {
      if (filters.id && filters.id.length > 0) {
        qb.andWhere('reply.id IN (:...id)', { id: filters.id })
      }

      if (filters.projectId && filters.projectId.length > 0) {
        qb.andWhere('reply.projectId IN (:...projectId)', {
          projectId: filters.projectId,
        })
      }

      if (filters.specialistId && filters.specialistId.length > 0) {
        qb.andWhere('reply.specialistId IN (:...specialistId)', {
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

  async findOne(id) {
    const { rows } = await this.findAll({ take: 1, offset: 0 }, { id: [id] })

    return rows[0]
  }
}
