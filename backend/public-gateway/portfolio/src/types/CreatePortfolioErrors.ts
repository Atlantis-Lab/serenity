import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class CreatePortfolioErrors {
  @Field({ nullable: true })
  name?: string
}
