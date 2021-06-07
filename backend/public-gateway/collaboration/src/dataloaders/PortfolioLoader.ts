import DataLoader                   from 'dataloader'
import { NestDataLoader }           from '@monstrs/nestjs-dataloader'
import { Injectable, OnModuleInit } from '@nestjs/common'
import { Client, ClientGrpc }       from '@nestjs/microservices'
import { map }                      from 'rxjs/operators'

import { portfolio }                from '@protos/interfaces'
import { clientOptions }            from '@protos/portfolio'

@Injectable()
export class PortfolioLoader implements NestDataLoader, OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private portfolioService: portfolio.PortfolioService

  onModuleInit() {
    this.portfolioService = this.client.getService<portfolio.PortfolioService>('PortfolioService')
  }

  getPortfolio = async (userIds: string[]) =>
    this.portfolioService
      .getPortfolio({ filters: { userId: userIds } })
      .pipe(map((data: any) => userIds.map((id) => data.rows.filter((item) => item.userId === id))))
      .toPromise()

  generateDataLoader(): DataLoader<any, any> {
    // @ts-ignore
    return new DataLoader<string, portfolio.Portfolio>(this.getPortfolio)
  }
}
