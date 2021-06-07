import { Field, ObjectType } from 'type-graphql'

import { CreatePortfolioErrors } from './CreatePortfolioErrors'
import { Portfolio } from './Portfolio'

@ObjectType()
export class CreatePortfolioResponse {
  @Field(type => Portfolio, { nullable: true })
  result?: Portfolio

  @Field(type => CreatePortfolioErrors, { nullable: true })
  errors?: CreatePortfolioErrors
}
