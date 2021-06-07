import { LoggerModule }                                            from '@monstrs/nestjs-logger'
import { Global, Module }                                          from '@nestjs/common'
import { TypeOrmModule }                                           from '@nestjs/typeorm'

import config                                                      from './config'
import { Category, CategoryGroup }                                 from './entities'
import { CategoryEntityRepository, CategoryGroupEntityRepository } from './repositories'

const feature = TypeOrmModule.forFeature([CategoryGroup, Category])

@Global()
@Module({
  imports: [LoggerModule, feature.module, TypeOrmModule.forRoot(config)],
  // @ts-ignore
  providers: [...feature.providers, CategoryGroupEntityRepository, CategoryEntityRepository],
  // @ts-ignore
  exports: [...feature.exports, CategoryGroupEntityRepository, CategoryEntityRepository],
})
export class PersistenceModule {}
