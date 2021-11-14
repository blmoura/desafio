import { AppError } from '../../../../shared/errors/AppError'
import { ITagsRepository } from '../../repositories/ITagsRepository'

class DeleteTagUseCase {
  constructor (private readonly tagsRepository: ITagsRepository) {}

  async execute (id: string): Promise<void> {
    const tagAlreadyExists = await this.tagsRepository.findById(id)

    if (!tagAlreadyExists) {
      throw new AppError('Tag not found')
    }

    await this.tagsRepository.delete(id)
  }
}

export { DeleteTagUseCase }
