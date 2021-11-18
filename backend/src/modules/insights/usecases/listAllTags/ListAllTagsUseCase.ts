import { IPaginateTag, ITagsRepository } from '../../repositories/ITagsRepository'

interface IRequest {
  skip?: number
  take?: number
}

class ListAllTagsUseCase {
  constructor (private readonly tagRepository: ITagsRepository) {}
  async execute ({ skip, take }: IRequest): Promise<IPaginateTag> {
    const tags = await this.tagRepository.listAll({ skip, take })
    return tags
  }
}

export { ListAllTagsUseCase }
