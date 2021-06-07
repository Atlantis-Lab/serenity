/* eslint-disable no-underscore-dangle */
import { Controller }           from '@nestjs/common'
import { ElasticsearchService } from '@nestjs/elasticsearch'
import { GrpcMethod }           from '@nestjs/microservices'

@Controller()
export class ProjectSearchController {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  @GrpcMethod('SearchService', 'searchProjects')
  async searchProjects({ query, filters }: any) {
    const body: any = {}

    if (query || filters) {
      body.query = {
        bool: {},
      }
    }

    if (query) {
      body.query.bool.must = {
        multi_match: {
          query,
          fields: ['name', 'description', 'category'],
        },
      }
    }

    if (filters && (filters.categoryId || filters.status)) {
      body.query.bool.filter = []

      if (filters.categoryId) {
        body.query.bool.filter.push({
          term: { categoryId: filters.categoryId },
        })
      }

      if (filters.status) {
        body.query.bool.filter.push({
          term: { status: filters.status },
        })
      }
    }

    const {
      body: { hits: result },
    }: any = await this.elasticsearchService.search({
      index: 'projects',
      type: 'ciphertrick',
      body,
    })

    const rows = result.hits.map((hit) => ({
      id: hit._id,
      score: hit.score,
      source: hit.source,
    }))

    return {
      rows,
    }
  }
}
