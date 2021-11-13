import { Insight } from '../../infra/typeorm/entities/Insight'
import { IInsightsRepository } from '../../repositories/IInsightsRepository'

interface IRequest {
  text: string
}

class CreateInsightUseCase {
  constructor (private readonly insightRepository: IInsightsRepository) {}

  async execute ({ text }: IRequest): Promise<Insight> {
    const insight = await this.insightRepository.create({ text })

    return insight
  }
}

export { CreateInsightUseCase }
