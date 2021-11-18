import { Insight } from '../../infra/typeorm/entities/Insight'
import { IInsightsRepository } from '../../repositories/IInsightsRepository'
import { AppError } from '../../../../shared/errors/AppError'

class FindInsightByNameUseCase {
  constructor (private readonly insightRepository: IInsightsRepository) {}

  async execute (name: string): Promise<Insight[]> {
    const formattedName = name.split(' ') && name.split(' ').join('_')
    const insight = await this.insightRepository.findByTerm(formattedName)
    if (!insight) {
      throw new AppError('Insight not found')
    }

    return insight
  }
}

export { FindInsightByNameUseCase }
