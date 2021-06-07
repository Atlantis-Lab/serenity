import { Injectable }       from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository }       from 'typeorm'

import { Chat, Discussion } from '@collaboration/persistence'

interface PageInfo {
  hasNext: boolean
}

interface FindAllResponse<T> {
  rows: T[]
  pageInfo: PageInfo
}

@Injectable()
export class DiscussionQueriesService {
  constructor(
    @InjectRepository(Discussion)
    private readonly discussionRepository: Repository<Discussion>,
    @InjectRepository(Chat)
    private readonly chatRepository: Repository<Chat>
  ) {}

  async findAll(pager?: any, filters?: any): Promise<FindAllResponse<Discussion>> {
    const qb = await this.discussionRepository
      .createQueryBuilder('discussion')
      .leftJoinAndSelect('discussion.messages', 'messages')

    if (filters) {
      if (filters.id && filters.id.length > 0) {
        qb.andWhere('discussion.id IN (:...id)', { id: filters.id })
      }

      if (filters.customerId && filters.customerId.length > 0) {
        qb.andWhere('discussion.customerId IN (:...customerId)', {
          customerId: filters.customerId,
        })
      }

      if (filters.specialistId && filters.specialistId.length > 0) {
        qb.andWhere('discussion.specialistId IN (:...specialistId)', {
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

  async findChatAll(pager?: any, filters?: any): Promise<FindAllResponse<Discussion>> {
    const qb = await this.chatRepository.createQueryBuilder('chat')

    if (filters) {
      if (filters.id && filters.id.length > 0) {
        qb.andWhere('chat.id IN (:...id)', { id: filters.id })
      }

      if (filters.customerId && filters.customerId.length > 0) {
        qb.andWhere('chat.customerId IN (:...customerId)', {
          customerId: filters.customerId,
        })
      }

      if (filters.specialistId && filters.specialistId.length > 0) {
        qb.andWhere('chat.specialistId IN (:...specialistId)', {
          specialistId: filters.specialistId,
        })
      }
    }

    if (pager) {
      qb.skip(pager.offset || 0).take((pager.take || 25) + 1)
    }

    const chats = await qb.getMany()

    const rows = await this.discussionRepository
      .createQueryBuilder('discussion')
      .leftJoinAndSelect('discussion.messages', 'messages')
      .where('discussion.id IN (:...id)', { id: chats.map((chat) => chat.discussionId) })
      .getMany()

    return {
      rows,
      pageInfo: {
        hasNext: qb.expressionMap.take ? rows.length >= qb.expressionMap.take : false,
      },
    }
  }
}
