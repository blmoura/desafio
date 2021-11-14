import { Request, Response } from 'express'
import { ListAllTagsUseCase } from './ListAllTagsUseCase'

class ListAllTagsController {
  constructor (private readonly listAllTagsUseCase: ListAllTagsUseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const tags = await this.listAllTagsUseCase.execute()
    return response.status(200).json(tags)
  }
}

export { ListAllTagsController }
