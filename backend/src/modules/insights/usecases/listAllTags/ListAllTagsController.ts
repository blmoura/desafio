import { Request, Response } from 'express'
import { ListAllTagsUseCase } from './ListAllTagsUseCase'

class ListAllTagsController {
  constructor (private readonly listAllTagsUseCase: ListAllTagsUseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { skip, take } = request.query

    const skipFormatted = Number(skip)
    const takeFormatted = Number(take)

    const tags = await this.listAllTagsUseCase.execute({ skip: skipFormatted, take: takeFormatted })
    return response.status(200).json(tags)
  }
}

export { ListAllTagsController }
