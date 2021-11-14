import { ITagsRepository } from '../../repositories/ITagsRepository'
import { Insight } from '../../infra/typeorm/entities/Insight'
import { IInsightsRepository } from '../../repositories/IInsightsRepository'

interface IRequest {
  text: string
  tags?: string[]
}

class CreateInsightUseCase {
  constructor (private readonly insightRepository: IInsightsRepository, private readonly tagsRepository: ITagsRepository) {}

  async execute ({ text, tags }: IRequest): Promise<Insight> {
    let tagsExists = null
    let insight = null

    if (tags) {
      tagsExists = await this.tagsRepository.findByIds(tags)
      insight = await this.insightRepository.create({ text, tags: tagsExists })
    } else {
      insight = await this.insightRepository.create({ text })
    }

    return insight
  }
}

export { CreateInsightUseCase }
