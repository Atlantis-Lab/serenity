import { Field, ID, InputType } from 'type-graphql'

@InputType()
export class SpecialistsFilter {
  @Field((type) => [ID], { nullable: true })
  id: string[]
}
