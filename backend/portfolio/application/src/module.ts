import { Module }                                    from '@nestjs/common'

import { PortfolioQueriesService, PortfolioService } from './services'

@Module({
  providers: [PortfolioService, PortfolioQueriesService],
  exports: [PortfolioService, PortfolioQueriesService],
})
export class ApplicationModule {}
