import { Injectable }       from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository }       from 'typeorm'

import { Counter }          from '@hits/persistence'

interface PageInfo {
  hasNext: boolean
}

interface FindAllResponse<T> {
  rows: T[]
  pageInfo: PageInfo
}

@Injectable()
export class CounterService {
  constructor(
    @InjectRepository(Counter)
    private readonly counterRepository: Repository<Counter>
  ) {}

  async findAll(filters: any): Promise<FindAllResponse<Counter>> {
    const qb = await this.counterRepository.createQueryBuilder('counter')

    if (filters) {
      if (filters.id && filters.id.length > 0) {
        qb.andWhere('counter.id IN (:...id)', { id: filters.id })
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
