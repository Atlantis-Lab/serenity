import { Injectable }       from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository }       from 'typeorm'

import { Activity }         from '@hits/persistence'

@Injectable()
export class TrackActivityService {
  constructor(
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>
  ) {}

  async track(id: string): Promise<any> {
    try {
      let activity = await this.activityRepository.findOne(id)

      if (!activity) {
        activity = this.activityRepository.create({
          id,
        })
      }

      activity.last = Date.now()

      await this.activityRepository.save(activity)

      return activity
    } catch (error) {
      console.log(error) // eslint-disable-line

      return null
    }
  }
}
