import { Bus }                  from '@monstrs/nestjs-bus'
import { Logger }               from '@monstrs/nestjs-logger'
import { Injectable }           from '@nestjs/common'
import { Connection }           from 'typeorm'

import { Reply as ReplyEntity } from '@collaboration/domain'
import { WriteRepository }      from '@node-ts/ddd'

import { Reply }                from '../entities'

@Injectable()
// @ts-ignore
export class ReplyEntityRepository extends WriteRepository<ReplyEntity, Reply> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger,
    private readonly bus: Bus
  ) {
    // @ts-ignore
    super(ReplyEntity, Reply, connection, bus, logger)
  }
}
