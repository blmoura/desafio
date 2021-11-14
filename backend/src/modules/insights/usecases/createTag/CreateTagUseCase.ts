import { ITagsRepository } from 'modules/insights/repositories/ITagsRepository'
import { AppError } from '../../../../shared/errors/AppError'
import { Tag } from '../../infra/typeorm/entities/Tag'

interface IRequest {
  name: string
}

class CreateTagUseCase {
  constructor (private readonly tagRepository: ITagsRepository) {}

  async execute ({ name }: IRequest): Promise<Tag> {
    const tagAlreadyExists = await this.tagRepository.findByName(name)

    if (tagAlreadyExists) {
      throw new AppError('Tag already exists')
    }

    const tag = await this.tagRepository.create({ name })
    return tag
  }
}

export { CreateTagUseCase }
