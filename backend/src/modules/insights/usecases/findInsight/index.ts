import { InsightsRepository } from '../../infra/typeorm/repositories/InsightsRepository'
import { FindInsightController } from './FindInsightController'
import { FindInsightUseCase } from './FindInsightUseCase'

export default (): FindInsightController => {
  const insightRepository = new InsightsRepository()
  const findInsightUseCase = new FindInsightUseCase(insightRepository)
  const findInsightController = new FindInsightController(findInsightUseCase)

  return findInsightController
}
