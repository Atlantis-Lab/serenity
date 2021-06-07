import { Field, ID, InputType } from 'type-graphql'

@InputType()
export class AddReplyMessageInput {
  @Field((type) => ID)
  replyId: string

  @Field()
  message: string
}
