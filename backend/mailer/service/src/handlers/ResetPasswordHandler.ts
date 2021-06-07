import { HandlesMessage }         from '@monstrs/nestjs-bus'
import { InjectRepository }       from '@nestjs/typeorm'
import { Repository }             from 'typeorm'

import { ResetPasswordRequested } from '@identity/domain'
import { Sending }                from '@mailer/db'
import { Renderer }               from '@mailer/renderer'
import { Transport }              from '@mailer/transport'
import { Handler }                from '@node-ts/bus-core'

@HandlesMessage(ResetPasswordRequested)
export class ResetPasswordHandler implements Handler<ResetPasswordRequested> {
  constructor(
    @InjectRepository(Sending)
    private readonly sendingRepository: Repository<Sending>,
    private transport: Transport,
    private renderer: Renderer
  ) {}

  async handle({ email, resetToken }: ResetPasswordRequested): Promise<void> {
    const sending = await this.sendingRepository.save(
      this.sendingRepository.create({
        template: 'reset-password',
        email: email.address,
        payload: { email, resetToken } as any,
      })
    )

    const { subject, html, text } = await this.renderer.render('reset-password', {
      email,
      resetToken,
      sendingId: sending.id,
    })

    await this.transport.send(email.address, subject, html, text)
  }
}
