import { ICreateTagDTO } from '../dtos/ICreateTagDTO'
import { Tag } from '../infra/typeorm/entities/Tag'

export interface IPaginateTag<T = any> {
  count: number
  data: T[]
}

interface IPaginate {
  take?: number
  skip?: number
}
export interface ITagsRepository {
  create: ({ name }: ICreateTagDTO) => Promise<Tag>
  findByName: (name: string) => Promise<Tag>
  listAll: ({ skip, take }: IPaginate) => Promise<IPaginateTag>
  findById: (tagId: string) => Promise<Tag>
  findByIds: (ids: string[]) => Promise<Tag[]>
  update: ({ id, name, created_at, updated_at }: Tag) => Promise<Tag>
  delete: (tagId: string) => Promise<void>
}
