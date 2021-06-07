import { Bus }                from '@monstrs/nestjs-bus'
import { Logger }             from '@monstrs/nestjs-logger'
import { Injectable }         from '@nestjs/common'
import { Connection }         from 'typeorm'

import { File as FileEntity } from '@files/domain'
import { WriteRepository }    from '@node-ts/ddd'

import { File }               from '../entities'

@Injectable()
// @ts-ignore
export class FileEntityRepository extends WriteRepository<FileEntity, File> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger,
    private readonly bus: Bus
  ) {
    // @ts-ignore
    super(FileEntity, File, connection, bus, logger)
  }
}
