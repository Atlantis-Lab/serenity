import { Injectable, NestMiddleware, OnModuleInit } from '@nestjs/common'
import { Client, ClientGrpc }                       from '@nestjs/microservices'

import { clientOptions }                            from '@protos/hits'
import { hits }                                     from '@protos/interfaces'

const lastActivity: Map<string, number> = new Map()

const needTrackActivity = (id) => {
  if (!lastActivity.has(id)) {
    return true
  }

  return Date.now() - (lastActivity as any).get(id) > 60 * 1000
}

@Injectable()
export class ActivityMiddleware implements NestMiddleware, OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private hitsService: hits.HitsService

  onModuleInit() {
    this.hitsService = this.client.getService<hits.HitsService>('HitsService')
  }

  use = async (req: any, res: any, next: () => void) => {
    if (req.get('x-user') && needTrackActivity(req.get('x-user'))) {
      try {
        await this.hitsService.trackActivity({ id: req.get('x-user') }).toPromise()

        lastActivity.set(req.get('x-user'), Date.now())
      } catch (error) {
        console.log(error) // eslint-disable-line
      }
    }

    next()
  }
}
