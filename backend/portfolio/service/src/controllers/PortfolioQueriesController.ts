import { Controller }              from '@nestjs/common'
import { GrpcMethod }              from '@nestjs/microservices'

import { PortfolioQueriesService } from '@portfolio/application'

@Controller()
export class PortfolioQueriesController {
  constructor(private readonly portfolioService: PortfolioQueriesService) {}

  @GrpcMethod('PortfolioService', 'getPortfolio')
  getPortfolio({ filters }) {
    return this.portfolioService.findAll(filters)
  }
}
