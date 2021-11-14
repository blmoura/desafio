import { Request, Response } from 'express'
import { DeleteInsightUseCase } from './DeleteInsightUseCase'

class DeleteInsightController {
  constructor (private readonly deleteInsightUseCase: DeleteInsightUseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    await this.deleteInsightUseCase.execute(id)

    return response.status(200).send()
  }
}

export { DeleteInsightController }
