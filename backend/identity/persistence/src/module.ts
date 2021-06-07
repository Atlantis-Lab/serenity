import { LoggerModule }        from '@atlantis-lab/nestjs-logger'
import { Global, Module }      from '@nestjs/common'
import { TypeOrmModule }       from '@nestjs/typeorm'

import config                  from './config'
import { User }                from './entities'
import { UserStoreRepository } from './repositories'

const feature = TypeOrmModule.forFeature([User])

@Global()
@Module({
  imports: [LoggerModule, feature.module, TypeOrmModule.forRoot(config)],
  // @ts-ignore
  providers: [...feature.providers, UserStoreRepository],
  // @ts-ignore
  exports: [...feature.exports, UserStoreRepository],
})
export class PersistenceModule {}
