import { ITagsRepository } from 'modules/insights/repositories/ITagsRepository'
import { AppError } from '../../../../shared/errors/AppError'
import { IUpdateInsightDTO } from '../../dtos/IUpdateInsightDTO'
import { Insight } from '../../infra/typeorm/entities/Insight'
import { IInsightsRepository } from '../../repositories/IInsightsRepository'

class UpdateInsightUseCase {
  constructor (private readonly insightRepository: IInsightsRepository, private readonly tagsRepository: ITagsRepository) {}

  async execute ({ id, text, tags }: IUpdateInsightDTO): Promise<Insight> {
    const insight = await this.insightRepository.findById(id)
    if (!insight) {
      throw new AppError('Insight not found')
    }

    if (text) {
      insight.text = text
    }

    const tagsExists = await this.tagsRepository.findByIds(tags)
    if (tagsExists) {
      insight.tags = tagsExists
    }

    await this.insightRepository.update(insight)
    return insight
  }
}

export { UpdateInsightUseCase }
