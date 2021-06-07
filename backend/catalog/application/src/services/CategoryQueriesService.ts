import { Injectable }       from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository }       from 'typeorm'

import { Category }         from '@catalog/persistence'

interface PageInfo {
  hasNext: boolean
}

interface FindAllResponse<T> {
  rows: T[]
  pageInfo: PageInfo
}

@Injectable()
export class CategoryQueriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) {}

  async findAll(filters: any = {}): Promise<FindAllResponse<Category>> {
    const qb = await this.categoryRepository.createQueryBuilder('category')

    if (filters) {
      if (filters.id && filters.id.length > 0) {
        qb.andWhere('category.id IN (:...id)', { id: filters.id })
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
