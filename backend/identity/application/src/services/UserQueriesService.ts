import { Injectable }       from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository }       from 'typeorm'

import { User }             from '@identity/persistence'

@Injectable()
export class UserQueriesService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async getUsers(pager, order, filters) {
    const { offset, take } = pager || { offset: 0, take: 24 }

    const qb = await this.userRepository.createQueryBuilder('user')

    if (filters) {
      if (filters.id && filters.id.length > 0) {
        qb.andWhere('user.id IN (:...id)', { id: filters.id })
      }
    }

    qb.skip(offset).take(take + 1)

    if (order) {
      const direction = order.direction.toUpperCase() as any

      qb.orderBy(order.by, direction)
    }

    const rows = await qb.getMany()

    return {
      rows: rows.slice(0, take),
      pageInfo: {
        hasNext: rows.length > take,
      },
    }
  }
}
