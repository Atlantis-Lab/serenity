import { Bus }                        from '@monstrs/nestjs-bus'
import { Logger }                     from '@monstrs/nestjs-logger'
import { Injectable }                 from '@nestjs/common'
import { Uuid }                       from '@node-ts/ddd-types'
import { Connection }                 from 'typeorm'

import { Customer as CustomerEntity } from '@collaboration/domain'
import { WriteRepository }            from '@node-ts/ddd'

import { Customer }                   from '../entities'

@Injectable()
// @ts-ignore
export class CustomerEntityRepository extends WriteRepository<CustomerEntity, Customer> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger,
    private readonly bus: Bus
  ) {
    // @ts-ignore
    super(CustomerEntity, Customer, connection, bus, logger)
  }

  async getById(id: Uuid): Promise<CustomerEntity> {
    let writeModel = await this.repository.findOne(id)

    if (writeModel === undefined) {
      writeModel = this.repository.create({ id })

      await this.repository.save(writeModel)
    }

    return this.toAggregateRoot(writeModel)
  }
}
