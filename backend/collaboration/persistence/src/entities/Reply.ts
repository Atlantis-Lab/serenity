/* eslint-disable no-underscore-dangle */
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'

import { ReplyStatus } from '@collaboration/domain'

import { Discussion }  from './Discussion'

@Entity()
@Index(['projectId', 'specialistId'], { unique: true })
export class Reply {
  @PrimaryColumn('uuid')
  id: string

  @Column({ default: 0 })
  version: number = 0

  @Column()
  projectId: string

  @Column()
  specialistId: string

  @OneToOne((type) => Discussion)
  @JoinColumn()
  discussion: Discussion | string

  @Column()
  discussionId: string

  @Column('enum', {
    enum: ReplyStatus,
    default: ReplyStatus.new,
  })
  status: ReplyStatus

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
