import { ICreateTagDTO } from 'modules/insights/dtos/ICreateTagDTO'
import { ITagRepository } from 'modules/insights/repositories/ITagRepository'
import { getRepository, Repository } from 'typeorm'
import { Tag } from '../entities/Tag'

class TagsRepository implements ITagRepository {
  private readonly ormRepository: Repository<Tag>
  constructor () {
    this.ormRepository = getRepository(Tag)
  }

  async create ({ name }: ICreateTagDTO): Promise<Tag> {
    const tag = this.ormRepository.create({ name })
    await this.ormRepository.save(tag)
    return tag
  }
}

export { TagsRepository }
