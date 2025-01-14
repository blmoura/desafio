import { AppError } from '../../../../shared/errors/AppError'
import { IInsightsRepository } from '../../repositories/IInsightsRepository'

class DeleteInsightUseCase {
  constructor (private readonly insightsRepository: IInsightsRepository) {}

  async execute (id: string): Promise<void> {
    const insight = await this.insightsRepository.findById(id)
    if (!insight) {
      throw new AppError('Insight not found')
    }

    await this.insightsRepository.delete(id)
  }
}

export { DeleteInsightUseCase }
