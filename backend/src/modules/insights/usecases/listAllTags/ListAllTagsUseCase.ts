import { ITagsRepository } from 'modules/insights/repositories/ITagsRepository'
import { Tag } from '../../infra/typeorm/entities/Tag'

class ListAllTagsUseCase {
  constructor (private readonly tagRepository: ITagsRepository) {}
  async execute (): Promise<Tag[]> {
    const tags = await this.tagRepository.listAll()
    return tags
  }
}

export { ListAllTagsUseCase }
