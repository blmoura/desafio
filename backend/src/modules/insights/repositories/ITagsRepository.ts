import { ICreateTagDTO } from '../dtos/ICreateTagDTO'
import { Tag } from '../infra/typeorm/entities/Tag'

export interface ITagsRepository {
  create: ({ name }: ICreateTagDTO) => Promise<Tag>
  findByName: (name: string) => Promise<Tag>
  listAll: () => Promise<Tag[]>
  findById: (tagId: string) => Promise<Tag>
  update: ({ id, name, created_at, updated_at }: Tag) => Promise<Tag>
  delete: (tagId: string) => Promise<void>
}
