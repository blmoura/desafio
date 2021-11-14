import { ICreateInsightDTO } from '../dtos/ICreateInsightDTO'
import { Insight } from '../infra/typeorm/entities/Insight'

export interface IInsightsRepository {
  create: (data: ICreateInsightDTO) => Promise<Insight>
  findAll: () => Promise<Insight[]>
  findById: (id: string) => Promise<Insight>
  update: ({ id, text, created_at, updated_at }: Insight) => Promise<Insight>
  delete: (id: string) => Promise<void>
}
