import { InsightsRepository } from '../../infra/typeorm/repositories/InsightsRepository'
import { DeleteInsightController } from './DeleteInsightController'
import { DeleteInsightUseCase } from './DeleteInsightUseCase'

export default (): DeleteInsightController => {
  const insightRepository = new InsightsRepository()
  const deleteInsightUseCase = new DeleteInsightUseCase(insightRepository)
  const deleteInsightController = new DeleteInsightController(deleteInsightUseCase)

  return deleteInsightController
}
