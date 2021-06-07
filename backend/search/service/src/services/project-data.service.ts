import { Injectable, OnModuleInit }                    from '@nestjs/common'
import { ElasticsearchService }                        from '@nestjs/elasticsearch'
import { Client, ClientGrpc }                          from '@nestjs/microservices'

import { clientOptions as catalogClientOptions }       from '@protos/catalog'
import { clientOptions as collaborationClientOptions } from '@protos/collaboration'
import { catalog, collaboration }                      from '@protos/interfaces'

@Injectable()
export class ProjectDataService implements OnModuleInit {
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

  async handle(projectId: string): Promise<void> {
    const {
      // @ts-ignore
      rows: [project],
    } = await this.collaborationService.getProjects({ filters: { id: [projectId] } }).toPromise()
    const {
      // @ts-ignore
      rows: [category],
    } = await this.catalogService
      // @ts-ignore
      .getCategories({ filters: { id: [project.categoryId] } })
      .toPromise()

    const body = {
      name: project.name,
      description: project.description,
      status: project.status,
      category: category.name,
      categoryId: category.id,
    }

    // @ts-ignore
    await this.elasticsearchService.index({
      index: 'projects',
      type: 'ciphertrick',
      id: project.id,
      body,
    })
  }
}
