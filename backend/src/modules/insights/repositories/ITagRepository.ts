import { ICreateTagDTO } from '../dtos/ICreateTagDTO'
import { Tag } from '../infra/typeorm/entities/Tag'

export interface ITagRepository {
  create: ({ name }: ICreateTagDTO) => Promise<Tag>
  findByName: (name: string) => Promise<Tag>
}
