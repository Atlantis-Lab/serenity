import { Field, ID, InputType } from 'type-graphql'

@InputType()
export class AddDiscussionMessageInput {
  @Field((type) => ID)
  recipientId: string

  @Field()
  message: string
}
