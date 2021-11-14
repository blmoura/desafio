import { Request, Response } from 'express'
import { CreateInsightUseCase } from './CreateInsightUseCase'

class CreateInsightController {
  constructor (private readonly createInsightUseCase: CreateInsightUseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { text, tags } = request.body

    const insight = await this.createInsightUseCase.execute({ text, tags })

    return response.status(201).json(insight)
  }
}

export { CreateInsightController }
