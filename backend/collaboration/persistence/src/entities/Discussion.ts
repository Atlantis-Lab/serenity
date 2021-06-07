/* eslint-disable no-underscore-dangle */
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Message } from './Message'
import { Reply }   from './Reply'

@Entity()
export class Discussion {
  @PrimaryColumn('uuid')
  id: string

  @Column({ default: 0 })
  version: number = 0

  @Column()
  specialistId: string

  @Column()
  customerId: string

  @OneToOne((type) => Reply, (reply) => reply.discussion)
  reply: Reply

  @OneToMany((type) => Message, (message) => message.discussion)
  messages: Message[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
