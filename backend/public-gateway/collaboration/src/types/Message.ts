import { Profile } from '@public-gateway/identity'
import { Field, ObjectType } from 'type-graphql'

import { SpecialistMember } from './SpecialistMember'

@ObjectType()
export class Message {
  @Field()
  id: string

  @Field()
  content: string

  @Field(type => Profile)
  author: Profile

  @Field(type => SpecialistMember, { nullable: true })
  member: SpecialistMember

  @Field()
  read: boolean

  @Field({ nullable: true })
  get sendDate(): Date | undefined {
    return this.sendAt
  }

  sendAt?: Date

  set sendDate(value) {
    if (value) {
      this.sendAt = new Date(value)
    }
  }
}
