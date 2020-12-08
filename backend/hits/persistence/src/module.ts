import { LoggerModule }            from '@monstrs/nestjs-logger'
import { Global, Module }          from '@nestjs/common'
import { TypeOrmModule }           from '@nestjs/typeorm'

import config                      from './config'
import { Activity, Counter, View } from './entities'

const feature = TypeOrmModule.forFeature([Counter, View, Activity])

@Global()
@Module({
  imports: [LoggerModule, feature.module, TypeOrmModule.forRoot(config)],
  providers: [...feature.providers],
  exports: [...feature.exports],
})
export class PersistenceModule {}
