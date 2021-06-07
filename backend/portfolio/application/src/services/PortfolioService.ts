import { Injectable }                                     from '@nestjs/common'

import { Portfolio }                                      from '@portfolio/domain'
import { PortfolioEntityRepository }                      from '@portfolio/persistence'

import { CreatePortfolioCommand, UpdatePortfolioCommand } from '../commands'

@Injectable()
export class PortfolioService {
  constructor(private readonly portfolioRepository: PortfolioEntityRepository) {}

  async create(command: CreatePortfolioCommand): Promise<any> {
    const portfolio = await Portfolio.create(
      command.id,
      command.userId,
      command.name,
      command.images
    )

    await this.portfolioRepository.save(portfolio)

    return portfolio
  }

  async update(command: UpdatePortfolioCommand): Promise<any> {
    const portfolio = await this.portfolioRepository.getById(command.id)

    portfolio.update(command.name, command.images)

    await this.portfolioRepository.save(portfolio)

    return portfolio
  }
}
