/* eslint-disable class-methods-use-this */
import { Injectable, OnModuleInit }                    from '@nestjs/common'
import { Args, ResolveProperty, Resolver }             from '@nestjs/graphql'
import { Client, ClientGrpc }                          from '@nestjs/microservices'

import { clientOptions as collaborationClientOptions } from '@protos/collaboration'
import { collaboration, search }                       from '@protos/interfaces'
import { clientOptions as searchClientOptions }        from '@protos/search'

import { SearchSpecialistsFilter }                     from '../inputs'
import { Search }                                      from '../types'

@Injectable()
@Resolver((of) => Search)
export class SpecialistsSearchResolver implements OnModuleInit {
  @Client(searchClientOptions)
  private readonly searchClient: ClientGrpc

  @Client(collaborationClientOptions)
  private readonly collaborationClient: ClientGrpc

  private searchService: search.SearchService

  private collaborationService: collaboration.CollaborationService

  onModuleInit() {
    this.searchService = this.searchClient.getService<search.SearchService>('SearchService')

    this.collaborationService =
      this.collaborationClient.getService<collaboration.CollaborationService>(
        'CollaborationService'
      )
  }

  @ResolveProperty()
  async specialists(
    @Args('query')
    query?: string,

    @Args({
      name: 'filters',
      nullable: true,
      type: () => SearchSpecialistsFilter,
    })
    filters?: SearchSpecialistsFilter
  ) {
    const { rows: hits } = await this.searchService
      .searchSpecialists({ query, filters })
      .toPromise()

    if ((hits as any).length === 0) {
      return {
        rows: [],
      }
    }

    const { rows } = await this.collaborationService
      .getSpecialists({
        filters: {
          id: (hits as any).map((hit) => hit.id),
        },
      })
      .toPromise()

    return {
      rows,
    }
  }
}
