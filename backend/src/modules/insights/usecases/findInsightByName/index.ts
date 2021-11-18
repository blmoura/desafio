import { InsightsRepository } from '../../infra/typeorm/repositories/InsightsRepository'
import { FindInsightByNameController } from './FindInsightByNameController'
import { FindInsightByNameUseCase } from './FindInsightByNameUseCase'

export default (): FindInsightByNameController => {
  const insightRepository = new InsightsRepository()
  const findInsightByNameUseCase = new FindInsightByNameUseCase(insightRepository)
  const findInsightByNameController = new FindInsightByNameController(findInsightByNameUseCase)

  return findInsightByNameController
}
