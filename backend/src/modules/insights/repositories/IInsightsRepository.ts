import { ICreateInsightDTO } from '../dtos/ICreateInsightDTO'
import { Insight } from '../infra/typeorm/entities/Insight'

export interface IPaginateInsight<T = any> {
  count: number
  data: T[]
}

interface IPaginate {
  take?: number
  skip?: number
}

export interface IInsightsRepository {
  create: ({ text, tags }: ICreateInsightDTO) => Promise<Insight>
  findAll: ({ take, skip }: IPaginate) => Promise<IPaginateInsight>
  findById: (id: string) => Promise<Insight>
  update: ({ id, text, tags, created_at, updated_at }: Insight) => Promise<Insight>
  delete: (id: string) => Promise<void>
}
