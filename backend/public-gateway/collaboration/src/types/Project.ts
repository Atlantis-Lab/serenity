import { Category } from '@public-gateway/catalog'
import { File } from '@public-gateway/files'
import { Field, ObjectType } from 'type-graphql'

import { ProjectAddress } from './ProjectAddress'
import { ProjectOwner } from './ProjectOwner'
import { Reply } from './Reply'

@ObjectType()
export class Project {
  @Field()
  id: string

  @Field()
  name: string

  @Field(type => Category)
  category: Category

  @Field({ nullable: true })
  description: string

  @Field(type => [File])
  photos: File[]

  @Field(type => ProjectAddress)
  address: ProjectAddress

  @Field()
  beginningOfWork: string

  @Field()
  budget: number

  @Field()
  legalEntitiesOnly: boolean

  @Field(type => ProjectOwner)
  owner: ProjectOwner

  @Field()
  worksheet: string

  @Field(type => [Reply])
  replies: Reply[]

  @Field()
  status: string

  @Field()
  views: number

  @Field()
  replyCount: number

  @Field({ nullable: true })
  get publicationDate(): Date | undefined {
    return this.publishedAt
  }

  publishedAt?: Date

  set publicationDate(value) {
    if (value) {
      this.publishedAt = new Date(value)
    }
  }
}
