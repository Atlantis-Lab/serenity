import { Field, ID, InputType } from 'type-graphql'

@InputType()
export class ProjectsFilter {
  @Field((type) => [ID], { nullable: true })
  id: string[]
}
