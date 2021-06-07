import { SignedUrlService }                             from '@monstrs/nestjs-signed-url'
import { Injectable }                                   from '@nestjs/common'
import { extname, format }                              from 'path'

import { Upload }                                       from '@files/domain'
import { FileEntityRepository, UploadEntityRepository } from '@files/persistence'

import { ConfirmUploadCommand, CreateUploadCommand }    from '../commands'

@Injectable()
export class UploadService {
  constructor(
    private readonly uploadRepository: UploadEntityRepository,
    private readonly fileRepository: FileEntityRepository,
    private readonly signedUrlService: SignedUrlService
  ) {}

  async create(command: CreateUploadCommand): Promise<any> {
    const filename = format({
      name: command.id,
      ext: extname(command.name),
    })

    const { url, fields } = await this.signedUrlService.generateWriteUrl(filename, {
      type: command.type,
    })

    const upload = Upload.create(command.id, command.type, command.name, url, fields)

    await this.uploadRepository.save(upload)

    return upload
  }

  async confirm(command: ConfirmUploadCommand): Promise<any> {
    const upload = await this.uploadRepository.getById(command.id)

    const file = upload.confirm()

    await this.uploadRepository.save(upload)
    await this.fileRepository.save(file)

    return file
  }
}
