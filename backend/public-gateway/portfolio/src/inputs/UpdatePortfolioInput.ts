import { Field, ID, InputType } from 'type-graphql'

@InputType()
export class UpdatePortfolioInput {
  @Field((type) => ID)
  id: string

  @Field()
  name: string

  @Field((type) => [ID])
  images: string[]
}
