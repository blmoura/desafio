import { Request, Response } from 'express'
import { ListAllInsightUseCase } from './ListAllInsightUseCase'

class ListInsightController {
  constructor (private readonly listAllInsightUseCase: ListAllInsightUseCase) { }

  async handle (request: Request, response: Response): Promise<Response> {
    const { skip, take } = request.query

    const skipFormatted = Number(skip)
    const takeFormatted = Number(take)

    const insights = await this.listAllInsightUseCase.execute({ skip: skipFormatted, take: takeFormatted })

    return response.status(200).json(insights)
  }
}

export { ListInsightController }
