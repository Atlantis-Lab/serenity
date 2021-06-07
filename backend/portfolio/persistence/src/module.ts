import { LoggerModule }              from '@monstrs/nestjs-logger'
import { Global, Module }            from '@nestjs/common'
import { TypeOrmModule }             from '@nestjs/typeorm'

import config                        from './config'
import { Portfolio }                 from './entities'
import { PortfolioEntityRepository } from './repositories'

const feature = TypeOrmModule.forFeature([Portfolio])

@Global()
@Module({
  imports: [LoggerModule, feature.module, TypeOrmModule.forRoot(config)],
  providers: [...feature.providers, PortfolioEntityRepository],
  exports: [...feature.exports, PortfolioEntityRepository],
})
export class PersistenceModule {}
