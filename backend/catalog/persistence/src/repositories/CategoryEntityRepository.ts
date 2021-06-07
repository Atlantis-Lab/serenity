import { Bus }                        from '@monstrs/nestjs-bus'
import { Logger }                     from '@monstrs/nestjs-logger'
import { Injectable }                 from '@nestjs/common'
import { Connection }                 from 'typeorm'

import { Category as CategoryEntity } from '@catalog/domain'
import { WriteRepository }            from '@node-ts/ddd'

import { Category }                   from '../entities'

@Injectable()
// @ts-ignore
export class CategoryEntityRepository extends WriteRepository<CategoryEntity, Category> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger,
    private readonly bus: Bus
  ) {
    // @ts-ignore
    super(CategoryEntity, Category, connection, bus, logger)
  }
}
