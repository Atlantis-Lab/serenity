import uuid                  from 'uuid/v4'
import { IsUUID, MinLength } from 'class-validator'

export class CreatePortfolioCommand {
  id: string = uuid()

  @IsUUID('4')
  userId: string

  @MinLength(1)
  name: string

  images: string[]
}
