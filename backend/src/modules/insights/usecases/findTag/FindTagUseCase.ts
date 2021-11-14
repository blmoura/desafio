import { ITagsRepository } from 'modules/insights/repositories/ITagsRepository'
import { Tag } from '../../infra/typeorm/entities/Tag'

class FindTagUseCase {
  constructor (private readonly tagsRepository: ITagsRepository) {}
  async execute (tagId: string): Promise<Tag> {
    const tag = await this.tagsRepository.findById(tagId)
    return tag
  }
}

export { FindTagUseCase }
