import { v4 as uuid } from 'uuid'
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { Tag } from './Tag'

@Entity('insights')
class Insight {
  @PrimaryColumn()
  id?: string

  @Column()
  text: string

  @ManyToMany(type => Tag, { eager: true })
  @JoinTable({
    name: 'insights_tags',
    joinColumns: [{ name: 'insight_id' }],
    inverseJoinColumns: [{ name: 'tag_id' }]
  })
  tags?: Tag[]

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
