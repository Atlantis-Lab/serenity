import connectRedis          from 'connect-redis'
import cookieParser          from 'cookie-parser'
import session               from 'express-session'
import { NestFactory }       from '@nestjs/core'

import { ApplicationModule } from './module'

declare const module: any

const RedisStore = connectRedis(session)

const bootstrap = async () => {
  const app = await NestFactory.create(ApplicationModule)

  app.enableCors()

  app.use(cookieParser())

  app.use(
    session({
      resave: false,
      secret: process.env.SESSION_SECRET || 'session-secret',
      saveUninitialized: true,
      store: new RedisStore({
        host: process.env.REDIS_HOST || 'redis',
      }),
    })
  )

  await app.listen(process.env.PORT || 3000)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}

bootstrap()
