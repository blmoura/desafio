import { TagsRepository } from '../../infra/typeorm/repositories/TagsRepository'
import { ListAllTagsController } from './ListAllTagsController'
import { ListAllTagsUseCase } from './ListAllTagsUseCase'

export default (): ListAllTagsController => {
  const tagsRepository = new TagsRepository()
  const listAllTagsUseCase = new ListAllTagsUseCase(tagsRepository)
  const listAllTagsController = new ListAllTagsController(listAllTagsUseCase)

  return listAllTagsController
}
