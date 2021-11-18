import { IInsightsRepository, IPaginateInsight } from '../../repositories/IInsightsRepository'

interface IRequest {
  skip?: number
  take?: number
}

class ListAllInsightUseCase {
  constructor (private readonly insightRepository: IInsightsRepository) {}

  async execute ({ skip, take }: IRequest): Promise<IPaginateInsight> {
    const insights = await this.insightRepository.findAll({ skip, take })
    return insights
  }
}

export { ListAllInsightUseCase }
