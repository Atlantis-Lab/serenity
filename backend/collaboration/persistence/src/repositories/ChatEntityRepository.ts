import { Bus }                from '@monstrs/nestjs-bus'
import { Logger }             from '@monstrs/nestjs-logger'
import { Injectable }         from '@nestjs/common'
import { Uuid }               from '@node-ts/ddd-types'
import { Connection }         from 'typeorm'

import { Chat as ChatEntity } from '@collaboration/domain'
import { WriteRepository }    from '@node-ts/ddd'

import { Chat }               from '../entities'

@Injectable()
// @ts-ignore
export class ChatEntityRepository extends WriteRepository<ChatEntity, Chat> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger,
    private readonly bus: Bus
  ) {
    // @ts-ignore
    super(ChatEntity, Chat, connection, bus, logger)
  }

  async getByParticipants(customerId: Uuid, specialistId: Uuid): Promise<ChatEntity | null> {
    const writeModel = await this.repository.findOne({
      where: {
        customerId,
        specialistId,
      },
    })

    if (writeModel) {
      return this.toAggregateRoot(writeModel)
    }

    return null
  }
}
