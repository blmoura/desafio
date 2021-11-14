import { TagsRepository } from '../../infra/typeorm/repositories/TagsRepository'
import { InsightsRepository } from '../../infra/typeorm/repositories/InsightsRepository'
import { CreateInsightController } from './CreateInsightController'
import { CreateInsightUseCase } from './CreateInsightUseCase'

export default (): CreateInsightController => {
  const insightRepository = new InsightsRepository()
  const tagsRepository = new TagsRepository()
  const createInsightUseCase = new CreateInsightUseCase(insightRepository, tagsRepository)
  const createInsightController = new CreateInsightController(createInsightUseCase)

  return createInsightController
}
