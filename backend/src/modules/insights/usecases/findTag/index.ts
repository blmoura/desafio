import { TagsRepository } from '../../infra/typeorm/repositories/TagsRepository'
import { FindTagController } from './FindTagController'
import { FindTagUseCase } from './FindTagUseCase'

export default (): FindTagController => {
  const tagsRepository = new TagsRepository()
  const findTagUseCase = new FindTagUseCase(tagsRepository)
  const findTagController = new FindTagController(findTagUseCase)

  return findTagController
}
