import { ICreateInsightDTO } from '../dtos/ICreateInsightDTO'
import { Insight } from '../infra/typeorm/entities/Insight'

export interface IInsightsRepository {
  create: (data: ICreateInsightDTO) => Promise<Insight>
}
