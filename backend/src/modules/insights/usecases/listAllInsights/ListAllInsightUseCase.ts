import { Insight } from '../../infra/typeorm/entities/Insight'
import { IInsightsRepository } from '../../repositories/IInsightsRepository'

class ListAllInsightUseCase {
  constructor (private readonly insightRepository: IInsightsRepository) {}

  async execute (): Promise<Insight[]> {
    const insights = await this.insightRepository.findAll()
    return insights
  }
}

export { ListAllInsightUseCase }
