import { Profile } from '@public-gateway/identity'
import { Portfolio } from '@public-gateway/portfolio'
import { Field, ObjectType } from 'type-graphql'

import { Interaction } from './Interaction'
import { Review } from './Review'
import { Specialisation } from './Specialisation'

@ObjectType()
export class Specialist {
  @Field()
  id: string

  @Field()
  rating: number

  @Field()
  reviewCount: number

  @Field()
  completedProjects: number

  @Field({ nullable: true })
  interaction: Interaction

  @Field({ nullable: true })
  specialisation: Specialisation

  @Field({ nullable: true })
  description: string

  @Field(type => Profile)
  profile: Profile

  @Field(type => [Portfolio])
  portfolio: Portfolio[]

  @Field(type => [Review])
  reviews: Review[]
}
