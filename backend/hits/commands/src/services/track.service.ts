import { Injectable }       from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository }       from 'typeorm'

import { Counter, View }    from '@hits/persistence'

@Injectable()
export class TrackService {
  constructor(
    @InjectRepository(Counter)
    private readonly counterRepository: Repository<Counter>,
    @InjectRepository(View)
    private readonly viewRepository: Repository<View>
  ) {}

  async view(subject: string, resource: string): Promise<any> {
    try {
      await this.viewRepository.save(
        this.viewRepository.create({
          subject,
          resource,
        })
      )

      const counter = await this.counterRepository.findOne(resource)

      if (!counter) {
        await this.counterRepository.save(
          this.counterRepository.create({
            id: resource,
            value: 1,
          })
        )
      } else {
        await this.counterRepository.manager.increment(Counter, { id: resource }, 'value', 1)
      }
    } catch (error) {
      console.log(error) // eslint-disable-line
    }
  }
}
