import { Tag } from '../infra/typeorm/entities/Tag'

export interface ICreateInsightDTO {
  text: string
  tags?: Tag[]
}
