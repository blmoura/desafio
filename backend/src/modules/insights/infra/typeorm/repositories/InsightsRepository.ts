import { IInsightsRepository } from '../../../repositories/IInsightsRepository'
import { Insight } from '../entities/Insight'
import { getRepository, Repository } from 'typeorm'
import { ICreateInsightDTO } from '../../../dtos/ICreateInsightDTO'

class InsightsRepository implements IInsightsRepository {
  private readonly ormRepository: Repository<Insight>

  constructor () {
    this.ormRepository = getRepository(Insight)
  }

  async create ({ text }: ICreateInsightDTO): Promise<Insight> {
    const insight = this.ormRepository.create({ text })
    await this.ormRepository.save(insight)
    return insight
  }
}

export { InsightsRepository }
