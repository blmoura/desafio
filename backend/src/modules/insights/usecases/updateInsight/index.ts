import { InsightsRepository } from '../../infra/typeorm/repositories/InsightsRepository'
import { UpdateInsightController } from './UpdateInsightController'
import { UpdateInsightUseCase } from './UpdateInsightUseCase'

export default (): UpdateInsightController => {
  const insightRepository = new InsightsRepository()
  const updateInsightUseCase = new UpdateInsightUseCase(insightRepository)
  const updateInsightController = new UpdateInsightController(updateInsightUseCase)

  return updateInsightController
}
