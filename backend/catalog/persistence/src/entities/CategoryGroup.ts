import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Category } from './Category'

@Entity()
export class CategoryGroup {
  @PrimaryColumn('uuid')
  id: string

  @Column({ default: 0 })
  version: number = 0

  @Column()
  name: string

  @OneToMany((type) => Category, (category) => category.group)
  children: Category[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
