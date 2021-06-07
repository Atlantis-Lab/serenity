/* eslint-disable class-methods-use-this */
import { AggregateRootProperties } from '@node-ts/ddd-types'

import { AggregateRoot }           from '@node-ts/ddd'

import {
  ProjectCompleted,
  ProjectCreated,
  ProjectPublished,
  ProjectReplyConfirmed,
  ProjectReplyRejected,
  ProjectSpecialistSelected,
  ProjectUpdated,
} from '../events'
import { Address }                 from './Address'
import { BeginningOfWork }         from './BeginningOfWork'
import { ProjectStatus }           from './ProjectStatus'
import { Reply }                   from './Reply'
import { ReplyStatus }             from './ReplyStatus'
import { Review }                  from './Review'

export interface ProjectProperties extends AggregateRootProperties {
  customerId: string

  name: string

  categoryId: string

  description: string

  photos: string[]

  address: Address

  beginningOfWork: BeginningOfWork

  budget: number

  legalEntitiesOnly: boolean

  worksheet: string

  status: ProjectStatus

  selectedReplyId: string

  replyCount: number

  publicationDate: number
}

export class Project extends AggregateRoot implements ProjectProperties {
  customerId: string

  name: string

  categoryId: string

  description: string

  photos: string[]

  address: Address

  beginningOfWork: BeginningOfWork

  budget: number

  legalEntitiesOnly: boolean

  worksheet: string

  status: ProjectStatus = ProjectStatus.draft

  selectedReplyId: string

  replyCount: number

  publicationDate: number

  static create(
    id: string,
    customerId: string,
    name: string,
    categoryId: string,
    photos: string[],
    address: Address,
    beginningOfWork: BeginningOfWork,
    budget: number,
    legalEntitiesOnly: boolean,
    worksheet: string,
    description?: string
  ): Project {
    const project = new Project(id)

    project.when(
      new ProjectCreated(
        project.id,
        customerId,
        name,
        categoryId,
        photos,
        address,
        beginningOfWork,
        budget,
        legalEntitiesOnly,
        worksheet,
        description
      )
    )

    return project
  }

  update(
    name: string,
    photos: string[],
    address: Address,
    beginningOfWork: BeginningOfWork,
    budget: number,
    legalEntitiesOnly: boolean,
    worksheet: string,
    description?: string
  ) {
    this.when(
      new ProjectUpdated(
        this.id,
        name,
        photos,
        address,
        beginningOfWork,
        budget,
        legalEntitiesOnly,
        worksheet,
        description
      )
    )
  }

  changeReplyStatus(reply: Reply, status: ReplyStatus) {
    reply.changeStatus(status)
  }

  chooseSpecialist(reply: Reply) {
    if (this.status === ProjectStatus.published) {
      reply.changeStatus(ReplyStatus.chosen)

      this.when(new ProjectSpecialistSelected(this.id, reply.id))
    }
  }

  rejectReply(reply: Reply) {
    if (this.status === ProjectStatus.selected) {
      reply.changeStatus(ReplyStatus.rejected)

      this.when(new ProjectReplyRejected(this.id, reply.id))
    }
  }

  confirmReply(reply: Reply) {
    if (this.status === ProjectStatus.selected) {
      reply.changeStatus(ReplyStatus.performed)

      this.when(new ProjectReplyConfirmed(this.id, reply.id))
    }
  }

  publish() {
    if (this.status === ProjectStatus.draft) {
      this.when(new ProjectPublished(this.id))
    }
  }

  complete(reply: Reply, rating: number, comment: string) {
    reply.changeStatus(ReplyStatus.completed)

    this.when(new ProjectCompleted(this.id))

    return Review.create(
      this.id,
      this.selectedReplyId,
      this.customerId,
      reply.specialistId,
      rating,
      comment
    )
  }

  incrementReplyCount() {
    this.replyCount += 1
  }

  protected whenProjectCreated(event: ProjectCreated): void {
    this.customerId = event.customerId
    this.name = event.name
    this.categoryId = event.categoryId
    // @ts-ignore
    this.description = event.description
    this.photos = event.photos
    this.address = event.address
    this.beginningOfWork = event.beginningOfWork
    this.budget = event.budget
    this.legalEntitiesOnly = event.legalEntitiesOnly
    this.worksheet = event.worksheet
  }

  protected whenProjectUpdated(event: ProjectUpdated): void {
    this.name = event.name
    // @ts-ignore
    this.description = event.description
    this.photos = event.photos
    this.address = event.address
    this.beginningOfWork = event.beginningOfWork
    this.budget = event.budget
    this.legalEntitiesOnly = event.legalEntitiesOnly
    this.worksheet = event.worksheet
  }

  protected whenProjectSpecialistSelected(event: ProjectSpecialistSelected): void {
    this.selectedReplyId = event.replyId
    this.status = ProjectStatus.selected
  }

  protected whenProjectPublished(event: ProjectPublished): void {
    this.status = ProjectStatus.published
    this.publicationDate = new Date().getTime()
  }

  protected whenProjectCompleted(event: ProjectCompleted): void {
    this.status = ProjectStatus.completed
  }

  protected whenProjectReplyRejected(event: ProjectReplyRejected): void {
    this.status = ProjectStatus.published
    // @ts-ignore
    this.selectedReplyId = null
  }

  protected whenProjectReplyConfirmed(event: ProjectReplyConfirmed): void {
    this.status = ProjectStatus.performed
  }
}
