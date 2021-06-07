import { Module }                                                           from '@nestjs/common'

import { ProjectsSearchResolver, SearchQueries, SpecialistsSearchResolver } from './resolvers'

export * from './types'

@Module({
  providers: [SearchQueries, ProjectsSearchResolver, SpecialistsSearchResolver],
})
export class SearchModule {}
