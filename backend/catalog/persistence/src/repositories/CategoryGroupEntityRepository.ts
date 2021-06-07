import { Bus }                                  from '@monstrs/nestjs-bus'
import { Logger }                               from '@monstrs/nestjs-logger'
import { Injectable }                           from '@nestjs/common'
import { Connection }                           from 'typeorm'

import { CategoryGroup as CategoryGroupEntity } from '@catalog/domain'
import { WriteRepository }                      from '@node-ts/ddd'

import { CategoryGroup }                        from '../entities'

@Injectable()
// @ts-ignore
export class CategoryGroupEntityRepository extends WriteRepository<
  CategoryGroupEntity,
  CategoryGroup
> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger,
    private readonly bus: Bus
  ) {
    // @ts-ignore
    super(CategoryGroupEntity, CategoryGroup, connection, bus, logger)
  }
}
