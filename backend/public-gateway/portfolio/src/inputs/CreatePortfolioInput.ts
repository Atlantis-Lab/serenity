import { Field, ID, InputType } from 'type-graphql'

@InputType()
export class CreatePortfolioInput {
  @Field()
  name: string

  @Field((type) => [ID])
  images: string[]
}
