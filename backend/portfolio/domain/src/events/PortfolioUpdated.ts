import { Event } from '@node-ts/bus-messages'
import { Uuid }  from '@node-ts/ddd-types'

export class PortfolioUpdated extends Event {
  static readonly NAME = 'portfolio/portfolio-updated'

  $name = PortfolioUpdated.NAME

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
