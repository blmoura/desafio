import { Request, Response } from 'express'
import { DeleteTagUseCase } from './DeleteTagUseCase'

class DeleteTagController {
  constructor (private readonly deleteTagUseCase: DeleteTagUseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    await this.deleteTagUseCase.execute(id)

    return response.status(200).send()
  }
}

export { DeleteTagController }
