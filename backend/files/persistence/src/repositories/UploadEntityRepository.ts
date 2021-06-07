import { Bus }                    from '@monstrs/nestjs-bus'
import { Logger }                 from '@monstrs/nestjs-logger'
import { Injectable }             from '@nestjs/common'
import { Connection }             from 'typeorm'

import { Upload as UploadEntity } from '@files/domain'
import { WriteRepository }        from '@node-ts/ddd'

import { Upload }                 from '../entities'

@Injectable()
// @ts-ignore
export class UploadEntityRepository extends WriteRepository<UploadEntity, Upload> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger,
    private readonly bus: Bus
  ) {
    // @ts-ignore
    super(UploadEntity, Upload, connection, bus, logger)
  }
}
