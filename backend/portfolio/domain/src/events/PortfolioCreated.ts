import { Event } from '@node-ts/bus-messages'
import { Uuid }  from '@node-ts/ddd-types'

export class PortfolioCreated extends Event {
  static readonly NAME = 'portfolio/portfolio-created'

  $name = PortfolioCreated.NAME

  $version = 0

  constructor(
    readonly portfolioId: Uuid,
    readonly userId: Uuid,
    readonly name: string,
    readonly images: string[]
  ) {
    super()
  }
}
