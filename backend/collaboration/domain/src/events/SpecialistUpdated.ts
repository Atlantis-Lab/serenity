import { Uuid }                                   from '@node-ts/ddd-types'

import { Event }                                  from '@node-ts/bus-messages'

import { Company, PrivatePerson, Specialisation } from '../model'

export class SpecialistUpdated extends Event {
  static readonly NAME = 'collaboration/specialist-updated'

  $name = SpecialistUpdated.NAME

  $version = 0

  constructor(
    readonly specialistId: Uuid,
    readonly interaction: PrivatePerson | Company,
    readonly specialisation: Specialisation,
    readonly description: string
  ) {
    super()
  }
}
