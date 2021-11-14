import { AppError } from '../../../../shared/errors/AppError'
import { Insight } from '../../infra/typeorm/entities/Insight'
import { IInsightsRepository } from '../../repositories/IInsightsRepository'

class FindInsightUseCase {
  constructor (private readonly insightRepository: IInsightsRepository) {}

  async execute (id: string): Promise<Insight> {
    const insight = await this.insightRepository.findById(id)

    if (!insight) {
      throw new AppError('Insight not found')
    }

    return insight
  }
}

export { FindInsightUseCase }
