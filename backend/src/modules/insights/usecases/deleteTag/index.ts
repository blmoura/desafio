import { TagsRepository } from '../../infra/typeorm/repositories/TagsRepository'
import { DeleteTagController } from './DeleteTagController'
import { DeleteTagUseCase } from './DeleteTagUseCase'

export default (): DeleteTagController => {
  const tagsRepository = new TagsRepository()
  const deleteTagUseCase = new DeleteTagUseCase(tagsRepository)
  const deleteTagController = new DeleteTagController(deleteTagUseCase)

  return deleteTagController
}
