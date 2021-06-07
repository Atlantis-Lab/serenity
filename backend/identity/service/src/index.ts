import { NestFactory }   from '@nestjs/core'
import { useContainer }  from 'class-validator'

import { serverOptions } from '@protos/identity'

import { ServiceModule } from './module'

declare const module: any

const bootstrap = async () => {
  const app = await NestFactory.createMicroservice(ServiceModule, serverOptions)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useContainer(app.select(ServiceModule), {
    fallback: true,
    fallbackOnErrors: true,
  })

  await app.listenAsync()

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}

bootstrap()
