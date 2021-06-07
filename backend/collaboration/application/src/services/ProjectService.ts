import { Injectable }                 from '@nestjs/common'

import { Address, Discussion, Reply } from '@collaboration/domain'
import {
  CustomerEntityRepository,
  DiscussionEntityRepository,
  MessageEntityRepository,
  ProjectEntityRepository,
  ReplyEntityRepository,
  SpecialistEntityRepository,
} from '@collaboration/persistence'

import {
  AddProjectReplyCommand,
  ChooseSpecialistCommand,
  ConfirmProjectReplyCommand,
  RejectProjectReplyCommand,
  UpdateProjectCommand,
} from '../commands'

@Injectable()
export class ProjectService {
  constructor(
    private readonly projectRepository: ProjectEntityRepository,
    private readonly specialistRepository: SpecialistEntityRepository,
    private readonly customerRepository: CustomerEntityRepository,
    private readonly messageRepository: MessageEntityRepository,
    private readonly discussionRepository: DiscussionEntityRepository,
    private readonly replyRepository: ReplyEntityRepository
  ) {}

  async update(command: UpdateProjectCommand): Promise<any> {
    const project = await this.projectRepository.getById(command.id)

    project.update(
      command.name,
      command.photos,
      new Address(command.address),
      command.beginningOfWork,
      command.budget,
      command.legalEntitiesOnly,
      command.worksheet,
      command.description
    )

    await this.projectRepository.save(project)

    return project
  }

  async addReply(command: AddProjectReplyCommand): Promise<any> {
    const project = await this.projectRepository.getById(command.projectId)
    const specialist = await this.specialistRepository.getById(command.specialistId)
    const customer = await this.customerRepository.getById(project.customerId)

    const discussion = Discussion.create(specialist.id, customer.id)
    const message = discussion.message(specialist.id, command.message)

    const reply = Reply.create(project.id, specialist.id, discussion.id)

    await this.discussionRepository.save(discussion)
    await this.messageRepository.save(message)
    await this.replyRepository.save(reply)

    return reply
  }

  async rejectReply(command: RejectProjectReplyCommand): Promise<any> {
    const project = await this.projectRepository.getById(command.projectId)
    const reply = await this.replyRepository.getById(project.selectedReplyId)

    project.rejectReply(reply)

    await this.projectRepository.save(project)
    await this.replyRepository.save(reply)

    return reply
  }

  async confirmReply(command: ConfirmProjectReplyCommand): Promise<any> {
    const project = await this.projectRepository.getById(command.projectId)
    const reply = await this.replyRepository.getById(project.selectedReplyId)

    project.confirmReply(reply)

    await this.projectRepository.save(project)
    await this.replyRepository.save(reply)

    return reply
  }

  async chooseSpecialist(command: ChooseSpecialistCommand): Promise<any> {
    const reply = await this.replyRepository.getById(command.replyId)
    const project = await this.projectRepository.getById(reply.projectId)

    project.chooseSpecialist(reply)

    await this.projectRepository.save(project)
    await this.replyRepository.save(reply)

    return project
  }
}
