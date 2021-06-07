import { Controller, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common'
import { GrpcMethod }                                            from '@nestjs/microservices'

import {
  AddProjectReplyCommand,
  ChooseSpecialistCommand,
  ConfirmProjectReplyCommand,
  ProjectService,
  RejectProjectReplyCommand,
  ReplyQueriesService,
  UpdateProjectCommand,
} from '@collaboration/application'
import { MapValidationErrorsInterceptor }                        from '@monstrs/nestjs-map-errors-interceptor'

@Controller()
@UseInterceptors(MapValidationErrorsInterceptor)
export class ProjectController {
  constructor(
    private readonly projectService: ProjectService,
    private readonly replyService: ReplyQueriesService
  ) {}

  @GrpcMethod('CollaborationService', 'updateProject')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateProject(request: UpdateProjectCommand) {
    const result = await this.projectService.update(request)

    return {
      result,
    }
  }

  @GrpcMethod('CollaborationService', 'addProjectReply')
  @UsePipes(new ValidationPipe({ transform: true }))
  async addProjectReply(request: AddProjectReplyCommand) {
    const { id } = await this.projectService.addReply(request)
    const result = await this.replyService.findOne(id)

    return {
      result,
    }
  }

  @GrpcMethod('CollaborationService', 'rejectProjectReply')
  @UsePipes(new ValidationPipe({ transform: true }))
  async rejectProjectReply(request: RejectProjectReplyCommand) {
    const result = await this.projectService.rejectReply(request)

    return {
      result,
    }
  }

  @GrpcMethod('CollaborationService', 'confirmProjectReply')
  @UsePipes(new ValidationPipe({ transform: true }))
  async confirmProjectReply(request: ConfirmProjectReplyCommand) {
    const result = await this.projectService.confirmReply(request)

    return {
      result,
    }
  }

  @GrpcMethod('CollaborationService', 'chooseSpecialist')
  @UsePipes(new ValidationPipe({ transform: true }))
  async chooseSpecialist(request: ChooseSpecialistCommand) {
    const result = await this.projectService.chooseSpecialist(request)

    return {
      result,
    }
  }
}
