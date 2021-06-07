import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class UpdatePortfolioErrors {
  @Field({ nullable: true })
  name?: string
}
