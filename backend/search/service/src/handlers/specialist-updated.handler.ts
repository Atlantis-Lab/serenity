import { HandlesMessage }        from '@monstrs/nestjs-bus'
import { Handler }               from '@node-ts/bus-core'

import { SpecialistUpdated }     from '@collaboration/domain'

import { SpecialistDataService } from '../services'

@HandlesMessage(SpecialistUpdated)
export class SpecialistUpdatedHandler implements Handler<SpecialistUpdated> {
  constructor(private readonly specialistDataService: SpecialistDataService) {}

  async handle(event: SpecialistUpdated): Promise<void> {
    await this.specialistDataService.handle(event.specialistId)
  }
}
