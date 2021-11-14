import { InsightsRepository } from '../../infra/typeorm/repositories/InsightsRepository'
import { ListInsightController } from './ListAllInsightController'
import { ListAllInsightUseCase } from './ListAllInsightUseCase'

export default (): ListInsightController => {
  const insightRepository = new InsightsRepository()
  const listAllInsightUseCase = new ListAllInsightUseCase(insightRepository)
  const listInsightController = new ListInsightController(listAllInsightUseCase)

  return listInsightController
}
