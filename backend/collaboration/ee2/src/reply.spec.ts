import 'reflect-metadata'

import uuid                                from 'uuid/v4'
import { ServiceModule }                   from '@collaboration/service/src/module'
import { Logger }                          from '@monstrs/nestjs-logger'
import { ClientsModule, NestMicroservice } from '@nestjs/microservices'
import { Test }                            from '@nestjs/testing'
import { MemoryQueue }                     from '@node-ts/bus-core/dist/transport'

import { BUS_SYMBOLS }                     from '@node-ts/bus-core'
import { clientOptions, serverOptions }    from '@protos/collaboration'
import { collaboration }                   from '@protos/interfaces'

describe('project reply', () => {
  let app: NestMicroservice
  let collaborationService: collaboration.CollaborationService

  beforeAll(async () => {
    const collaborationClientOptions: any = {
      name: 'client',
      ...clientOptions,
      options: {
        ...clientOptions.options,
        url: '0.0.0.0:50051',
      },
    }

    const module: any = await Test.createTestingModule({
      imports: [ServiceModule, ClientsModule.register([collaborationClientOptions])],
    })
      .overrideProvider(BUS_SYMBOLS.Transport)
      // @ts-ignore
      .useValue(new MemoryQueue(new Logger()))
      .compile()

    app = module.createNestMicroservice(serverOptions)

    await app.listenAsync()

    collaborationService = app.get('client').getService('CollaborationService')
  })

  afterAll(async () => {
    await app.close()
  })

  it('create', async () => {
    const project = await collaborationService
      .createProject({
        customerId: uuid(),
        name: 'project',
        categoryId: uuid(),
        description: 'description',
        photos: [],
        address: 'address',
        beginningOfWork: 'soon',
        budget: 10,
        legalEntitiesOnly: false,
      })
      .toPromise()

    const { result: reply } = await collaborationService
      .addProjectReply({
        projectId: (project as any).result.id,
        specialistId: uuid(),
        message: 'message',
      })
      .toPromise()

    expect((reply as any).id).toBeDefined()
  })
})
