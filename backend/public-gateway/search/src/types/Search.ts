import { ProjectsList, SpecialistsList } from '@public-gateway/collaboration'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Search {
  @Field(type => ProjectsList)
  projects: ProjectsList

  @Field(type => SpecialistsList)
  specialists: SpecialistsList
}
