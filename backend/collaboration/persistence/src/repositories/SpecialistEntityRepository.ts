import { Bus }                            from '@monstrs/nestjs-bus'
import { Logger }                         from '@monstrs/nestjs-logger'
import { Injectable }                     from '@nestjs/common'
import { Uuid }                           from '@node-ts/ddd-types'
import { Connection }                     from 'typeorm'

import { Specialist as SpecialistEntity } from '@collaboration/domain'
import { WriteRepository }                from '@node-ts/ddd'

import { Specialist }                     from '../entities'

@Injectable()
// @ts-ignore
export class SpecialistEntityRepository extends WriteRepository<SpecialistEntity, Specialist> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger,
    private readonly bus: Bus
  ) {
    // @ts-ignore
    super(SpecialistEntity, Specialist, connection, bus, logger)
  }

  async getById(id: Uuid): Promise<SpecialistEntity> {
    let writeModel = await this.repository.findOne(id)

    if (writeModel === undefined) {
      writeModel = this.repository.create({ id })

      await this.repository.save(writeModel)
    }

    return this.toAggregateRoot(writeModel)
  }
}
