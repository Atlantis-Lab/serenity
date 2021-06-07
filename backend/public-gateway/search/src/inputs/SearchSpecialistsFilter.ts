import { Field, ID, InputType } from 'type-graphql'

@InputType()
export class SearchSpecialistsFilter {
  @Field((type) => ID, { nullable: true })
  specialisationId?: string
}
