import { NestFactory }   from '@nestjs/core'

import { serverOptions } from '@protos/search'

import { ServiceModule } from './module'

declare const module: any

const bootstrap = async () => {
  const app = await NestFactory.create(ServiceModule)

  app.connectMicroservice(serverOptions)

  await app.startAllMicroservicesAsync()
  await app.listen(3000)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}

bootstrap()
