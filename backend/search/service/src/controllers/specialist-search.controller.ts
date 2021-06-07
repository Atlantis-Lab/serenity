/* eslint-disable no-underscore-dangle */
import { Controller }           from '@nestjs/common'
import { ElasticsearchService } from '@nestjs/elasticsearch'
import { GrpcMethod }           from '@nestjs/microservices'

@Controller()
export class SpecialistSearchController {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  @GrpcMethod('SearchService', 'searchSpecialists')
  async searchSpecialists({ query, filters }: any) {
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
          fields: ['description', 'specialisation'],
        },
      }
    }

    if (filters && filters.specialisationId) {
      body.query.bool.filter = {
        term: {},
      }

      if (filters.specialisationId) {
        body.query.bool.filter.term.specialisationId = filters.specialisationId
      }
    }

    const {
      body: { hits: result },
    }: any = await this.elasticsearchService.search({
      index: 'specialists',
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
