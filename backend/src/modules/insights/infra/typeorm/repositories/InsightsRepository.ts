import { IInsightsRepository } from '../../../repositories/IInsightsRepository'
import { Insight } from '../entities/Insight'
import { getRepository, Repository } from 'typeorm'
import { ICreateInsightDTO } from '../../../dtos/ICreateInsightDTO'

class InsightsRepository implements IInsightsRepository {
  private readonly ormRepository: Repository<Insight>

  constructor () {
    this.ormRepository = getRepository(Insight)
  }

  async delete (id: string): Promise<void> {
    await this.ormRepository.delete(id)
  }

  async update ({ id, text, tags, created_at, updated_at }: Insight): Promise<Insight> {
    const insight = await this.ormRepository.findOne(id)
    Object.assign(insight, { text, tags, created_at, updated_at })
    await this.ormRepository.save(insight)
    return insight
  }

  async findById (id: string): Promise<Insight> {
    const insight = await this.ormRepository.findOne(id)
    return insight
  }

  async findAll (): Promise<Insight[]> {
    const insights = await this.ormRepository.find()
    return insights
  }

  async create ({ text, tags }: ICreateInsightDTO): Promise<Insight> {
    const insight = this.ormRepository.create({ text, tags })
    await this.ormRepository.save(insight)
    return insight
  }
}

export { InsightsRepository }
