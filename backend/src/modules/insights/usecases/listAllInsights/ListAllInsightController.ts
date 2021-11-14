import { Request, Response } from 'express'
import { ListAllInsightUseCase } from './ListAllInsightUseCase'

class ListInsightController {
  constructor (private readonly listAllInsightUseCase: ListAllInsightUseCase) { }

  async handle (request: Request, response: Response): Promise<Response> {
    const insights = await this.listAllInsightUseCase.execute()

    return response.status(200).json(insights)
  }
}

export { ListInsightController }
