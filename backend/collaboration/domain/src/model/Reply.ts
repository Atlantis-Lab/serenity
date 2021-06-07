import uuid                                 from 'uuid/v4'
/* eslint-disable class-methods-use-this */
import { AggregateRoot }                    from '@node-ts/ddd'

import { ReplyCreated, ReplyStatusChanged } from '../events'
import { ReplyStatus }                      from './ReplyStatus'

export class Reply extends AggregateRoot {
  projectId: string

  specialistId: string

  discussionId: string

  status: ReplyStatus = ReplyStatus.new

  static create(projectId: string, specialistId: string, discussionId: string) {
    const reply = new Reply(uuid())

    reply.when(new ReplyCreated(reply.id, projectId, specialistId, discussionId))

    return reply
  }

  changeStatus(status: ReplyStatus) {
    this.when(new ReplyStatusChanged(this.id, status))
  }

  protected whenReplyCreated(event: ReplyCreated): void {
    this.projectId = event.projectId
    this.specialistId = event.specialistId
    this.discussionId = event.discussionId
  }

  protected whenReplyStatusChanged(event: ReplyStatusChanged): void {
    this.status = event.status
  }
}
