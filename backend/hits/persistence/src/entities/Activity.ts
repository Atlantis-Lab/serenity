/* eslint-disable no-underscore-dangle */
import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Activity {
  @PrimaryColumn()
  id: string

  @Column({
    type: Date,
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
  last: number
}
