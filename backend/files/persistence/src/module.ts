import { LoggerModule }                                 from '@monstrs/nestjs-logger'
import { Global, Module }                               from '@nestjs/common'
import { TypeOrmModule }                                from '@nestjs/typeorm'

import config                                           from './config'
import { File, Upload }                                 from './entities'
import { FileEntityRepository, UploadEntityRepository } from './repositories'

const feature = TypeOrmModule.forFeature([Upload, File])

@Global()
@Module({
  imports: [LoggerModule, feature.module, TypeOrmModule.forRoot(config)],
  // @ts-ignore
  providers: [...feature.providers, UploadEntityRepository, FileEntityRepository],
  // @ts-ignore
  exports: [...feature.exports, UploadEntityRepository, FileEntityRepository],
})
export class PersistenceModule {}
