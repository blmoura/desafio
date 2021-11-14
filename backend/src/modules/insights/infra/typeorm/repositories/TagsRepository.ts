import { ICreateTagDTO } from 'modules/insights/dtos/ICreateTagDTO'
import { ITagsRepository } from 'modules/insights/repositories/ITagsRepository'
import { getRepository, Repository } from 'typeorm'
import { Tag } from '../entities/Tag'

class TagsRepository implements ITagsRepository {
  private readonly ormRepository: Repository<Tag>
  constructor () {
    this.ormRepository = getRepository(Tag)
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
