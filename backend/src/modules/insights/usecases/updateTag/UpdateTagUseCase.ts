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

    tag.name = name

    await this.tagsRepository.update(tag)

    return tag
  }
}

export { UpdateTagUseCase }
