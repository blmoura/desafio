import { Request, Response } from 'express'
import { UpdateInsightUseCase } from './UpdateInsightUseCase'

class UpdateInsightController {
  constructor (private readonly updateInsightUseCase: UpdateInsightUseCase) { }

  async handle (request: Request, response: Response): Promise<Response> {
    const { text } = request.body
    const { id } = request.params

    const insight = await this.updateInsightUseCase.execute({ id, text })
    return response.status(200).json(insight)
  }
}

export { UpdateInsightController }