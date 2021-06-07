import { Injectable }                                                          from '@nestjs/common'

import { Address }                                                             from '@collaboration/domain'
import {
  CustomerEntityRepository,
  ProjectEntityRepository,
  ReplyEntityRepository,
  ReviewEntityRepository,
} from '@collaboration/persistence'

import { CompleteProjectCommand, CreateProjectCommand, PublishProjectCommand } from '../commands'
import { ProjectIdService }                                                    from './ProjectIdService'

@Injectable()
export class CustomerService {
  constructor(
    private readonly customerRepository: CustomerEntityRepository,
    private readonly projectRepository: ProjectEntityRepository,
    private readonly replyRepository: ReplyEntityRepository,
    private readonly reviewRepository: ReviewEntityRepository,
    private readonly projectIdService: ProjectIdService
  ) {}

  async createProject(command: CreateProjectCommand): Promise<any> {
    const customer = await this.customerRepository.getById(command.customerId)
    const projectId = await this.projectIdService.generate()

    const project = customer.createProject(
      projectId,
      command.name,
      command.categoryId,
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

  async publishProject(command: PublishProjectCommand): Promise<any> {
    const project = await this.projectRepository.getById(command.projectId)
    const customer = await this.customerRepository.getById(project.customerId)

    customer.publishProject(project)

    await this.customerRepository.save(customer)
    await this.projectRepository.save(project)

    return project
  }

  async completeProject(command: CompleteProjectCommand): Promise<any> {
    const project = await this.projectRepository.getById(command.projectId)
    const customer = await this.customerRepository.getById(project.customerId)
    const reply = await this.replyRepository.getById(project.selectedReplyId)

    const review = customer.completeProject(project, reply, command.rating, command.comment)

    await this.customerRepository.save(customer)
    await this.reviewRepository.save(review)
    await this.projectRepository.save(project)
    await this.replyRepository.save(reply)

    return review
  }
}
