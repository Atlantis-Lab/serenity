import { Injectable, OnModuleInit } from '@nestjs/common'
import { ElasticsearchService }     from '@nestjs/elasticsearch'

@Injectable()
export class ProjectIndexService implements OnModuleInit {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async onModuleInit() {
    await this.createIndex()
    await this.putMapping()
  }

  async createIndex() {
    const client = this.elasticsearchService

    const { body: exists } = await client.indices.exists({ index: 'projects' })

    if (!exists) {
      await client.indices.create({ index: 'projects' })
    }
  }

  async putMapping() {
    const client = this.elasticsearchService

    const mapping = {
      properties: {
        name: {
          type: 'text',
        },
        description: {
          type: 'text',
        },
        status: {
          type: 'text',
        },
        category: {
          type: 'text',
        },
        categoryId: {
          type: 'text',
        },
      },
    }

    await client.indices.putMapping({
      index: 'projects',
      type: 'ciphertrick',
      body: mapping,
      includeTypeName: true,
    } as any)
  }
}
