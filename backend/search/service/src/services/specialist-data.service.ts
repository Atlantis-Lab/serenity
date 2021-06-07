import { Injectable, OnModuleInit }                    from '@nestjs/common'
import { ElasticsearchService }                        from '@nestjs/elasticsearch'
import { Client, ClientGrpc }                          from '@nestjs/microservices'

import { clientOptions as catalogClientOptions }       from '@protos/catalog'
import { clientOptions as collaborationClientOptions } from '@protos/collaboration'
import { catalog, collaboration }                      from '@protos/interfaces'

@Injectable()
export class SpecialistDataService implements OnModuleInit {
  @Client(catalogClientOptions)
  private readonly catalogClient: ClientGrpc

  @Client(collaborationClientOptions)
  private readonly collaborationClient: ClientGrpc

  private catalogService: catalog.CatalogService

  private collaborationService: collaboration.CollaborationService

  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  onModuleInit() {
    this.catalogService = this.catalogClient.getService<catalog.CatalogService>('CatalogService')

    this.collaborationService =
      this.collaborationClient.getService<collaboration.CollaborationService>(
        'CollaborationService'
      )
  }

  async handle(specialistId: string): Promise<void> {
    const {
      // @ts-ignore
      rows: [specialist],
    } = await this.collaborationService
      .getSpecialists({ filters: { id: [specialistId] } })
      .toPromise()

    const { rows: categories } = await this.catalogService
      .getCategories({
        filters: {
          id: [
            ...(specialist as any).specialisation.main,
            ...(specialist as any).specialisation.additional,
          ],
        },
      })
      .toPromise()

    const body = {
      description: (categories as any).description,
      specialisation: (categories as any).map((category) => category.name),
      specialisationId: (categories as any).map((category) => category.id),
    }

    // @ts-ignore
    await this.elasticsearchService.index({
      index: 'specialists',
      type: 'ciphertrick',
      id: specialist.id,
      body,
    })
  }
}
