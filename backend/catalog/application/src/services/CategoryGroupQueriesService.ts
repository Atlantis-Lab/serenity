import { Injectable }           from '@nestjs/common'
import { InjectRepository }     from '@nestjs/typeorm'
import { Brackets, Repository } from 'typeorm'

import { CategoryGroup }        from '@catalog/persistence'

@Injectable()
export class CategoryGroupQueriesService {
  constructor(
    @InjectRepository(CategoryGroup)
    private readonly categoryGroupRepository: Repository<CategoryGroup>
  ) {}

  async findAll(filters: any = {}): Promise<any> {
    const qb = await this.categoryGroupRepository
      .createQueryBuilder('group')
      .leftJoinAndSelect('group.children', 'children')

    if (filters.search) {
      const common = `%${filters.search}%`

      qb.andWhere(
        new Brackets((searchQb) =>
          searchQb
            .where('group.name ILIKE :common', { common })
            .orWhere('children.name ILIKE :common', { common })
        )
      )
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
