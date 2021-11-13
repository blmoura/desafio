import { v4 as uuid } from 'uuid'
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'

@Entity('insights')
class Insight {
  @PrimaryColumn()
  id?: string

  @Column()
  text: string

  @CreateDateColumn()
  created_at?: Date

  @UpdateDateColumn()
  updated_at?: Date

  constructor () {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Insight }
