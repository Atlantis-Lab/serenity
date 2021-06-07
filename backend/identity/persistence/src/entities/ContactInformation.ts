import { Column }                                         from 'typeorm'

import { ContactInformation as ContactInformationEntity } from '@identity/domain'

import { Phone }                                          from './Phone'

export class ContactInformation extends ContactInformationEntity {
  @Column((type) => Phone)
  phone: Phone
}
