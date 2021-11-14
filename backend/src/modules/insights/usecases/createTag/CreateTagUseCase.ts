import { ITagRepository } from 'modules/insights/repositories/ITagRepository'
import { Tag } from '../../infra/typeorm/entities/Tag'

interface IRequest {
  name: string
}

class CreateTagUseCase {
  constructor (private readonly tagRepository: ITagRepository) {}

  async execute ({ name }: IRequest): Promise<Tag> {
    console.log(name)
    const tagAlreadyExists = await this.tagRepository.findByName(name)

    if (tagAlreadyExists) {
      throw new Error('Tag already exists')
    }

    const tag = await this.tagRepository.create({ name })
    return tag
  }
}

export { CreateTagUseCase }
