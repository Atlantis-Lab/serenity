import { HandlesMessage }   from '@monstrs/nestjs-bus'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository }       from 'typeorm'

import { UserRegistered }   from '@identity/domain'
import { Sending }          from '@mailer/db'
import { Renderer }         from '@mailer/renderer'
import { Transport }        from '@mailer/transport'
import { Handler }          from '@node-ts/bus-core'

@HandlesMessage(UserRegistered)
export class EmailVerificationHandler implements Handler<UserRegistered> {
  constructor(
    @InjectRepository(Sending)
    private readonly sendingRepository: Repository<Sending>,
    private transport: Transport,
    private renderer: Renderer
  ) {}

  async handle({ email }: UserRegistered): Promise<void> {
    const sending = await this.sendingRepository.save(
      this.sendingRepository.create({
        template: 'email-verification',
        email: email.address,
        payload: { email } as any,
      })
    )

    const { subject, html, text } = await this.renderer.render('email-verification', {
      email,
      sendingId: sending.id,
    })

    await this.transport.send(email.address, subject, html, text)
  }
}
