import { TagsRepository } from '../../infra/typeorm/repositories/TagsRepository'
import { CreateTagController } from './CreateTagController'
import { CreateTagUseCase } from './CreateTagUseCase'

export default (): CreateTagController => {
  const tagsRepository = new TagsRepository()
  const createTagUseCase = new CreateTagUseCase(tagsRepository)
  const createTagController = new CreateTagController(createTagUseCase)

  return createTagController
}
