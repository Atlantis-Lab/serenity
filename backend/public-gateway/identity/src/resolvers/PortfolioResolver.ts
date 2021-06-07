/* eslint-disable class-methods-use-this */
import { Injectable, OnModuleInit }              from '@nestjs/common'
import { Args, ResolveProperty, Resolver, Root } from '@nestjs/graphql'
import { Client, ClientGrpc }                    from '@nestjs/microservices'
import { ID }                                    from 'type-graphql'
import { map }                                   from 'rxjs/operators'

import { portfolio }                             from '@protos/interfaces'
import { clientOptions }                         from '@protos/portfolio'

import { User }                                  from '../types'

@Injectable()
@Resolver((of) => User)
export class PortfolioResolver implements OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private portfolioService: portfolio.PortfolioService

  onModuleInit() {
    this.portfolioService = this.client.getService<portfolio.PortfolioService>('PortfolioService')
  }

  @ResolveProperty()
  portfolio(
    @Root()
    user: any,
    @Args({ name: 'id', nullable: true, type: () => ID })
    id: string
  ) {
    return this.portfolioService
      .getPortfolio({ filters: { userId: [user.id], id: id ? [id] : null } })
      .pipe(map((data: any) => data.rows))
  }
}
