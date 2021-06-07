/* eslint-disable no-underscore-dangle */
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'

import { Account }                                                           from './Account'
import { Interaction }                                                       from './Interaction'
import { Specialisation }                                                    from './Specialisation'

@Entity()
export class Specialist {
  @PrimaryColumn('uuid')
  id: string

  @Column({ default: 0 })
  version: number = 0

  @Column({ nullable: true })
  description: string

  _interaction: Interaction

  @Column((type) => Specialisation)
  specialisation: Specialisation

  @Column((type) => Account)
  account: Account

  @Column((type) => Interaction)
  get interaction() {
    return this._interaction
  }

  set interaction(interaction) {
    this._interaction = interaction
  }

  @Column({ default: 0 })
  rating: number = 0

  @Column({ default: 0 })
  reviewCount: number = 0

  @Column({ default: 0 })
  completedProjects: number = 0

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
