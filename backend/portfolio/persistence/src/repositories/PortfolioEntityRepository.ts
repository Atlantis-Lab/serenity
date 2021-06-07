import { Bus }                          from '@monstrs/nestjs-bus'
import { Logger }                       from '@monstrs/nestjs-logger'
import { Injectable }                   from '@nestjs/common'
import { WriteRepository }              from '@node-ts/ddd'
import { Connection }                   from 'typeorm'

import { Portfolio as PortfolioEntity } from '@portfolio/domain'

import { Portfolio }                    from '../entities'

@Injectable()
// @ts-ignore
export class PortfolioEntityRepository extends WriteRepository<PortfolioEntity, Portfolio> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger,
    private readonly bus: Bus
  ) {
    // @ts-ignore
    super(PortfolioEntity, Portfolio, connection, bus, logger)
  }
}
