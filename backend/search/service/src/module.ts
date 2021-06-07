import { BusModule }                                           from '@monstrs/nestjs-bus'
import { Module }                                              from '@nestjs/common'
import { ElasticsearchModule }                                 from '@nestjs/elasticsearch'

import { ProjectSearchController, SpecialistSearchController } from './controllers'
import {
  ProjectCompletedHandler,
  ProjectCreatedHandler,
  ProjectPublishedHandler,
  ProjectReplyConfirmedHandler,
  ProjectReplyRejectedHandler,
  ProjectUpdatedHandler,
  SpecialistUpdatedHandler,
} from './handlers'
import { HealthModule }                                        from './health'
import {
  ProjectDataService,
  ProjectIndexService,
  SpecialistDataService,
  SpecialistIndexService,
} from './services'

@Module({
  imports: [
    HealthModule,
    ElasticsearchModule.register({
      node: process.env.ELASTICSEARCH_HOST || 'http://elasticsearch-rest:9200',
    }),
    BusModule.forRabbitMq({
      queueName: 'search',
      connectionString: process.env.BUS_URL || 'amqp://local:password@rabbitmq:5672/?heartbeat=30',
    }),
  ],
  providers: [
    ProjectIndexService,
    ProjectDataService,
    SpecialistIndexService,
    SpecialistDataService,
    SpecialistUpdatedHandler,
    ProjectUpdatedHandler,
    ProjectCompletedHandler,
    ProjectReplyConfirmedHandler,
    ProjectReplyRejectedHandler,
    ProjectCreatedHandler,
    ProjectPublishedHandler,
  ],
  controllers: [ProjectSearchController, SpecialistSearchController],
})
export class ServiceModule {}
