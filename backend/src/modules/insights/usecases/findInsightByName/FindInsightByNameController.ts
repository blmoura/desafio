import { Request, Response } from 'express'
import { FindInsightByNameUseCase } from './FindInsightByNameUseCase'

class FindInsightByNameController {
  constructor (private readonly findInsightByNameUseCase: FindInsightByNameUseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { name } = request.query

    const nameFormatted = String(name)

    const insight = await this.findInsightByNameUseCase.execute(nameFormatted)

    return response.status(200).json(insight)
  }
}

export { FindInsightByNameController }
