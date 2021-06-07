import { Field, ID, InputType } from 'type-graphql'

@InputType()
export class ChooseSpecialistInput {
  @Field((type) => ID)
  replyId: string
}
