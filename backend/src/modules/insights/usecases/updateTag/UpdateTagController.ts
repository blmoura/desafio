import { Request, Response } from 'express'
import { UpdateTagUseCase } from './UpdateTagUseCase'

class UpdateTagController {
  constructor (private readonly updateTagUseCase: UpdateTagUseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { name } = request.body
    const { id } = request.params

    const tag = await this.updateTagUseCase.execute({ tagId: id, name })

    return response.status(200).json(tag)
  }
}

export { UpdateTagController }
