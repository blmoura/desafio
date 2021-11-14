import { Router } from 'express'
import createTagController from '../../../../modules/insights/usecases/createTag'
import listAllTagsController from '../../../../modules/insights/usecases/listAllTags'
import updateTagController from '../../../../modules/insights/usecases/updateTag'

const tagRouter = Router()

tagRouter.post('/', async (request, response) => {
  return await createTagController().handle(request, response)
})

tagRouter.get('/', async (request, response) => {
  return await listAllTagsController().handle(request, response)
})

tagRouter.put('/:id', async (request, response) => {
  return await updateTagController().handle(request, response)
})

export { tagRouter }
