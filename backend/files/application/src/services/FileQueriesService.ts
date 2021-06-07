import { Injectable }       from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository }       from 'typeorm'

import { File }             from '@files/persistence'

interface PageInfo {
  hasNext: boolean
}

interface FindAllResponse<T> {
  rows: T[]
  pageInfo: PageInfo
}

@Injectable()
export class FileQueriesService {
  constructor(
    @InjectRepository(File)
    private readonly fileRepository: Repository<File>
  ) {}

  async findAll(filters: any): Promise<FindAllResponse<File>> {
    const qb = await this.fileRepository.createQueryBuilder('file')

    if (filters) {
      if (filters.id && filters.id.length > 0) {
        qb.andWhere('file.id IN (:...id)', { id: filters.id })
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
