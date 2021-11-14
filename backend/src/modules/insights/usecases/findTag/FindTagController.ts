import { Request, Response } from 'express'
import { FindTagUseCase } from './FindTagUseCase'

class FindTagController {
  constructor (private readonly findTagUseCase: FindTagUseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const tag = await this.findTagUseCase.execute(id)

    return response.status(200).json(tag)
  }
}

export { FindTagController }
