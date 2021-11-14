import { ICreateTagDTO } from '../../../dtos/ICreateTagDTO'
import { ITagsRepository } from '../../../repositories/ITagsRepository'
import { getRepository, Repository } from 'typeorm'
import { Tag } from '../entities/Tag'

class TagsRepository implements ITagsRepository {
  private readonly ormRepository: Repository<Tag>
  constructor () {
    this.ormRepository = getRepository(Tag)
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
