import { Bus }                    from '@monstrs/nestjs-bus'
import { Logger }                 from '@monstrs/nestjs-logger'
import { Injectable }             from '@nestjs/common'
import { Connection }             from 'typeorm'

import { Review as ReviewEntity } from '@collaboration/domain'
import { WriteRepository }        from '@node-ts/ddd'

import { Review }                 from '../entities'

@Injectable()
// @ts-ignore
export class ReviewEntityRepository extends WriteRepository<ReviewEntity, Review> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger,
    private readonly bus: Bus
  ) {
    // @ts-ignore
    super(ReviewEntity, Review, connection, bus, logger)
  }
}
