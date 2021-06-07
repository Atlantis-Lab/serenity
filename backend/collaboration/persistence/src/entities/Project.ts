import { Column, Entity, PrimaryColumn }      from 'typeorm'
import { CreateDateColumn, UpdateDateColumn } from 'typeorm'

/* eslint-disable no-underscore-dangle */
import { BeginningOfWork, ProjectStatus }     from '@collaboration/domain'

import { Address }                            from './Address'

@Entity()
export class Project {
  @PrimaryColumn()
  id: string

  @Column({ default: 0 })
  version: number = 0

  @Column()
  customerId: string

  @Column()
  name: string

  @Column()
  categoryId: string

  @Column()
  budget: number

  @Column()
  legalEntitiesOnly: boolean

  @Column('enum', {
    enum: BeginningOfWork,
    nullable: true,
  })
  beginningOfWork: BeginningOfWork

  @Column({ nullable: true })
  description: string

  @Column('simple-array')
  photos: string[]

  @Column((type) => Address)
  address: Address

  @Column('text', { default: '{}' })
  worksheet: string

  @Column('enum', {
    enum: ProjectStatus,
    default: ProjectStatus.draft,
  })
  status: ProjectStatus

  @Column({ nullable: true })
  selectedReplyId: string

  @Column({ default: 0 })
  replyCount: number = 0

  @Column({
    type: Date,
    nullable: true,
    transformer: {
      from(value: Date): number | null {
        if (!value) {
          return null
        }

        return value.getTime()
      },
      to(value: number): Date | null {
        if (!value) {
          return null
        }

        return new Date(value)
      },
    },
  })
  publicationDate: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
