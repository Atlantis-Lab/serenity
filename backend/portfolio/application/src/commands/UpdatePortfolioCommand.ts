import { IsUUID, MinLength } from 'class-validator'

export class UpdatePortfolioCommand {
  @IsUUID('4')
  id: string

  @IsUUID('4')
  userId: string

  @MinLength(1)
  name: string

  images: string[]
}
