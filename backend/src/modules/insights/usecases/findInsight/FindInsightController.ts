import { Request, Response } from 'express'
import { FindInsightUseCase } from './FindInsightUseCase'

class FindInsightController {
  constructor (private readonly findInsightUseCase: FindInsightUseCase) {}
  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const insight = await this.findInsightUseCase.execute(id)

    return response.status(200).json(insight)
  }
}

export { FindInsightController }
