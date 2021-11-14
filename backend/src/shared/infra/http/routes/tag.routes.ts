import { Router } from 'express'
import createTagController from '../../../../modules/insights/usecases/createTag'

const tagRouter = Router()

tagRouter.post('/', async (request, response) => {
  return await createTagController().handle(request, response)
})

export { tagRouter }
