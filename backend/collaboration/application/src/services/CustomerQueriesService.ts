import { Injectable }       from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository }       from 'typeorm'

import { Customer }         from '@collaboration/persistence'

interface PageInfo {
  hasNext: boolean
}

interface FindAllResponse<T> {
  rows: T[]
  pageInfo: PageInfo
}

@Injectable()
export class CustomerQueriesService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>
  ) {}

  async findAll(filters: any = {}): Promise<FindAllResponse<Customer>> {
    const qb = await this.customerRepository.createQueryBuilder('customer')

    if (filters) {
      if (filters.id && filters.id.length > 0) {
        qb.andWhere('customer.id IN (:...id)', { id: filters.id })
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
