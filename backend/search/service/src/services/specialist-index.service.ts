import { Injectable, OnModuleInit } from '@nestjs/common'
import { ElasticsearchService }     from '@nestjs/elasticsearch'

@Injectable()
export class SpecialistIndexService implements OnModuleInit {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async onModuleInit() {
    await this.createIndex()
    await this.putMapping()
  }

  async createIndex() {
    const client = this.elasticsearchService

    const { body: exists } = await client.indices.exists({ index: 'specialists' })

    if (!exists) {
      await client.indices.create({ index: 'specialists' })
    }
  }

  async putMapping() {
    const client = this.elasticsearchService

    const mapping = {
      properties: {
        description: {
          type: 'text',
        },
        specialisation: {
          type: 'text',
        },
        specialisationId: {
          type: 'text',
        },
      },
    }

    await client.indices.putMapping({
      index: 'specialists',
      type: 'ciphertrick',
      body: mapping,
      includeTypeName: true,
    } as any)
  }
}
