/* eslint-disable no-underscore-dangle */
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Discussion } from './Discussion'

@Entity()
export class Message {
  @PrimaryColumn('uuid')
  id: string

  @Column({ default: 0 })
  version: number = 0

  @Column()
  authorId: string

  @Column('text')
  content: string

  @ManyToOne((type) => Discussion)
  @JoinColumn()
  discussion: Discussion | string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  private _discussionId: string

  set discussionId(discussionId) {
    if (!this.discussion) {
      this.discussion = discussionId
    }

    this._discussionId = discussionId
  }

  get discussionId() {
    return this._discussionId
  }

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
  sendDate: number

  @Column({ default: false })
  read: boolean = false
}
