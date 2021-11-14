import { Request, Response } from 'express'
import { CreateTagUseCase } from './CreateTagUseCase'

class CreateTagController {
  constructor (private readonly createTagUseCase: CreateTagUseCase) {}
  async handle (request: Request, response: Response): Promise<Response> {
    const { name } = request.body

    const tag = await this.createTagUseCase.execute({ name })

    return response.status(201).json(tag)
  }
}

export { CreateTagController }
