import { IUpdateInsightDTO } from '../../dtos/IUpdateInsightDTO'
import { Insight } from '../../infra/typeorm/entities/Insight'
import { IInsightsRepository } from '../../repositories/IInsightsRepository'

class UpdateInsightUseCase {
  constructor (private readonly insightRepository: IInsightsRepository) {}

  async execute ({ id, text }: IUpdateInsightDTO): Promise<Insight> {
    const insight = await this.insightRepository.findById(id)
    if (!insight) {
      throw new Error('Insight not found')
    }

    if (text) {
      insight.text = text
    }

    await this.insightRepository.update(insight)
    return insight
  }
}

export { UpdateInsightUseCase }
