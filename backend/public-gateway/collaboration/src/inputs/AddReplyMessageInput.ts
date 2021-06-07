import { Field, ID, InputType } from 'type-graphql'

@InputType()
export class ChangeReplyStatusInput {
  @Field((type) => ID)
  replyId: string

  @Field()
  status: string
}
