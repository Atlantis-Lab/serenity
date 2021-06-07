import { BusModule }                                       from '@monstrs/nestjs-bus'
import { Module }                                          from '@nestjs/common'

import { ApplicationModule }                               from '@portfolio/application'
import { PersistenceModule }                               from '@portfolio/persistence'

import { PortfolioController, PortfolioQueriesController } from './controllers'

@Module({
  imports: [
    BusModule.forRabbitMq({
      queueName: 'portfolio',
      connectionString: process.env.BUS_URL || 'amqp://local:password@rabbitmq:5672/?heartbeat=30',
    }),
    PersistenceModule,
    ApplicationModule,
  ],
  controllers: [PortfolioController, PortfolioQueriesController],
})
export class ServiceModule {}
