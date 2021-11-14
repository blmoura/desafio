import { TagsRepository } from '../../infra/typeorm/repositories/TagsRepository'
import { InsightsRepository } from '../../infra/typeorm/repositories/InsightsRepository'
import { UpdateInsightController } from './UpdateInsightController'
import { UpdateInsightUseCase } from './UpdateInsightUseCase'

export default (): UpdateInsightController => {
  const insightRepository = new InsightsRepository()
  const tagsRepository = new TagsRepository()
  const updateInsightUseCase = new UpdateInsightUseCase(insightRepository, tagsRepository)
  const updateInsightController = new UpdateInsightController(updateInsightUseCase)

  return updateInsightController
}
