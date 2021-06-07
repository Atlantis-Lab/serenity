import { Injectable }       from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository }       from 'typeorm'

import { Portfolio }        from '@portfolio/persistence'

interface PageInfo {
  hasNext: boolean
}

interface FindAllResponse<T> {
  rows: T[]
  pageInfo: PageInfo
}

@Injectable()
export class PortfolioQueriesService {
  constructor(
    @InjectRepository(Portfolio)
    private readonly portfolioRepository: Repository<Portfolio>
  ) {}

  async findAll(filters: any = {}): Promise<FindAllResponse<Portfolio>> {
    const qb = await this.portfolioRepository.createQueryBuilder('portfolio')

    if (filters) {
      if (filters.id && filters.id.length > 0) {
        qb.andWhere('portfolio.id IN (:...id)', { id: filters.id })
      }

      if (filters.userId && filters.userId.length > 0) {
        qb.andWhere('portfolio.userId IN (:...userId)', {
          userId: filters.userId,
        })
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
