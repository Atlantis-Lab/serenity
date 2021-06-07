import { Field, ID, InputType } from 'type-graphql'

@InputType()
export class ConfirmUploadInput {
  @Field((type) => ID)
  id: string
}
