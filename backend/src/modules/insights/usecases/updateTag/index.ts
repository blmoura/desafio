import { TagsRepository } from '../../infra/typeorm/repositories/TagsRepository'
import { UpdateTagController } from './UpdateTagController'
import { UpdateTagUseCase } from './UpdateTagUseCase'

export default (): UpdateTagController => {
  const tagsRepository = new TagsRepository()
  const updateTagUseCase = new UpdateTagUseCase(tagsRepository)
  const updateTagController = new UpdateTagController(updateTagUseCase)

  return updateTagController
}
