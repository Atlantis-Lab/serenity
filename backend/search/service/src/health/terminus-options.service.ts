import { BusHealthIndicator }                            from '@monstrs/nestjs-bus-health'
import { ElasticSearchHealthIndicator }                  from '@monstrs/nestjs-elasticsearch-indicator'
import { Injectable }                                    from '@nestjs/common'
import { TerminusModuleOptions, TerminusOptionsFactory } from '@nestjs/terminus'

@Injectable()
export class TerminusOptionsService implements TerminusOptionsFactory {
  constructor(
    private readonly elastic: ElasticSearchHealthIndicator,
    private readonly bus: BusHealthIndicator
  ) {}

  public createTerminusOptions(): TerminusModuleOptions {
    return {
      endpoints: [
        {
          url: '/health/alive',
          healthIndicators: [
            async () => this.elastic.pingCheck('elasticsearch'),
            async () => this.bus.pingCheck('bus'),
          ],
        },
        {
          url: '/health/ready',
          healthIndicators: [
            async () => this.elastic.pingCheck('elasticsearch'),
            async () => this.bus.pingCheck('bus'),
          ],
        },
      ],
    }
  }
}
