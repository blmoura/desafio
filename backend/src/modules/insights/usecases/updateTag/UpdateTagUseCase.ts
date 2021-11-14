import { ITagsRepository } from '../../repositories/ITagsRepository'
import { Tag } from '../../infra/typeorm/entities/Tag'

interface IRequest {
  tagId: string
  name: string
}

class UpdateTagUseCase {
  constructor (private readonly tagsRepository: ITagsRepository) {}

  async execute ({ tagId, name }: IRequest): Promise<Tag> {
    const tag = await this.tagsRepository.findById(tagId)

    if (!tag) {
      throw new Error('Tag not found')
    }

    if (name) {
      tag.name = name
    }

    const nameAlreadyExists = await this.tagsRepository.findByName(name)
    if (nameAlreadyExists) {
      throw new Error('Name already exists')
    }

    await this.tagsRepository.update(tag)

    return tag
  }
}

export { UpdateTagUseCase }
