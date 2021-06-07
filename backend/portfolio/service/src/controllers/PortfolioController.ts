import { MapValidationErrorsInterceptor }                        from '@monstrs/nestjs-map-errors-interceptor'
import { Controller, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common'
import { GrpcMethod }                                            from '@nestjs/microservices'

import {
  CreatePortfolioCommand,
  PortfolioService,
  UpdatePortfolioCommand,
} from '@portfolio/application'

@Controller()
@UseInterceptors(MapValidationErrorsInterceptor)
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @GrpcMethod('PortfolioService', 'createPortfolio')
  @UsePipes(new ValidationPipe({ transform: true }))
  async createPortfolio(request: CreatePortfolioCommand) {
    const result = await this.portfolioService.create(request)

    return {
      result,
    }
  }

  @GrpcMethod('PortfolioService', 'updatePortfolio')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updatePortfolio(request: UpdatePortfolioCommand) {
    const result = await this.portfolioService.update(request)

    return {
      result,
    }
  }
}
