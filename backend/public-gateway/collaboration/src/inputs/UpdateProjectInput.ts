import { Field, ID, InputType } from 'type-graphql'

@InputType()
export class UpdateProjectInput {
  @Field()
  id: string

  @Field()
  name: string

  @Field({ nullable: true })
  description: string

  @Field((type) => [ID])
  photos: string[]

  @Field()
  address: string

  @Field()
  beginningOfWork: string

  @Field()
  budget: number

  @Field()
  legalEntitiesOnly: boolean

  @Field()
  worksheet: string
}
