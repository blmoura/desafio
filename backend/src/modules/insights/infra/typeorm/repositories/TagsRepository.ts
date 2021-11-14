import { ICreateTagDTO } from '../../../dtos/ICreateTagDTO'
import { ITagsRepository } from '../../../repositories/ITagsRepository'
import { getRepository, Repository } from 'typeorm'
import { Tag } from '../entities/Tag'

class TagsRepository implements ITagsRepository {
  private readonly ormRepository: Repository<Tag>
  constructor () {
    this.ormRepository = getRepository(Tag)
  }

  async findByIds (ids: string[]): Promise<Tag[]> {
    const tags = await this.ormRepository.findByIds(ids)
    return tags
  }

  async delete (tagId: string): Promise<void> {
    await this.ormRepository.delete(tagId)
  }

  async findById (tagId: string): Promise<Tag> {
    const tag = await this.ormRepository.findOne(tagId)
    return tag
  }

  async update ({ id, name, created_at, updated_at }: Tag): Promise<Tag> {
    const tag = await this.ormRepository.findOne(id)
    Object.assign(tag, { name, created_at, updated_at })
    await this.ormRepository.save(tag)
    return tag
  }

  async listAll (): Promise<Tag[]> {
    const tags = await this.ormRepository.find()
    return tags
  }

  async findByName (name: string): Promise<Tag> {
    const tag = await this.ormRepository.findOne({
      where: { name }
    })
    return tag
  }

  async create ({ name }: ICreateTagDTO): Promise<Tag> {
    const tag = this.ormRepository.create({ name })
    await this.ormRepository.save(tag)
    return tag
  }
}

export { TagsRepository }
