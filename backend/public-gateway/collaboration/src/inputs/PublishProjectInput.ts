import { Field, ID, InputType } from 'type-graphql'

@InputType()
export class PublishProjectInput {
  @Field((type) => ID)
  projectId: string
}
