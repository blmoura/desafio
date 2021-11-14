import { ITagsRepository } from '../../repositories/ITagsRepository'

class DeleteTagUseCase {
  constructor (private readonly tagsRepository: ITagsRepository) {}

  async execute (id: string): Promise<void> {
    const tagAlreadyExists = await this.tagsRepository.findById(id)

    if (!tagAlreadyExists) {
      throw new Error('Tag not found')
    }

    await this.tagsRepository.delete(id)
  }
}

export { DeleteTagUseCase }