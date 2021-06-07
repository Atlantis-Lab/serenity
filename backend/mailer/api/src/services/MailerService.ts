import { Injectable }       from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository }       from 'typeorm'

import { Sending }          from '@mailer/db'

@Injectable()
export class MailerService {
  constructor(
    @InjectRepository(Sending)
    private readonly sendingRepository: Repository<Sending>
  ) {}

  findSending(id: string): Promise<Sending> {
    // @ts-ignore
    return this.sendingRepository.findOne(id)
  }
}
