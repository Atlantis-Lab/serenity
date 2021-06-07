import { AggregateRoot }                      from '@node-ts/ddd'
/* eslint-disable class-methods-use-this */
import { AggregateRootProperties }            from '@node-ts/ddd-types'

import { PortfolioCreated, PortfolioUpdated } from '../events'

export interface PortfolioProperties extends AggregateRootProperties {
  userId: string
  name: string
  images: string[]
}

export class Portfolio extends AggregateRoot implements PortfolioProperties {
  userId: string

  name: string

  images: string[]

  static async create(
    id: string,
    userId: string,
    name: string,
    images: string[]
  ): Promise<Portfolio> {
    const portfolio = new Portfolio(id)

    portfolio.when(new PortfolioCreated(id, userId, name, images))

    return portfolio
  }

  update(name: string, images: string[]) {
    this.when(new PortfolioUpdated(this.id, this.userId, name, images))
  }

  protected whenPortfolioCreated(event: PortfolioCreated): void {
    this.userId = event.userId
    this.name = event.name
    this.images = event.images
  }

  protected whenPortfolioUpdated(event: PortfolioUpdated): void {
    this.name = event.name
    this.images = event.images
  }
}
