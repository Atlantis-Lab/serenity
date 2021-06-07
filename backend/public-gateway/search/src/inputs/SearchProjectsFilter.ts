import { Field, ID, InputType } from 'type-graphql'

@InputType()
export class SearchProjectsFilter {
  @Field((type) => ID, { nullable: true })
  categoryId: string

  @Field({ nullable: true })
  status: string
}
