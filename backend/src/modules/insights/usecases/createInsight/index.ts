import { InsightsRepository } from '../../infra/typeorm/repositories/InsightsRepository'
import { CreateInsightController } from './CreateInsightController'
import { CreateInsightUseCase } from './CreateInsightUseCase'

export default (): CreateInsightController => {
  const insightRepository = new InsightsRepository()
  const createInsightUseCase = new CreateInsightUseCase(insightRepository)
  const createInsightController = new CreateInsightController(createInsightUseCase)

  return createInsightController
}
