import { v4 as uuid } from 'uuid'
import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

class Insight {
  @PrimaryGeneratedColumn('uuid')
  id?: string

  @Column('texto')
  text: string

  @CreateDateColumn('data_criacao')
  created_at?: Date

  @UpdateDateColumn('data_modificacao')
  updated_at?: Date

  constructor () {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Insight }
