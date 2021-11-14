import { Router } from 'express'
import createInsightController from '../../../../modules/insights/usecases/createInsight'
import listInsightController from '../../../../modules/insights/usecases/listAllInsights'
import updateInsightController from '../../../../modules/insights/usecases/updateInsight'
import deleteInsightController from '../../../../modules/insights/usecases/deleteInsight'

const insightRouter = Router()
insightRouter.post('/', async (request, response) => {
  return await createInsightController().handle(request, response)
})

insightRouter.get('/', async (request, response) => {
  return await listInsightController().handle(request, response)
})

insightRouter.put('/:id', async (request, response) => {
  return await updateInsightController().handle(request, response)
})

insightRouter.delete('/:id', async (request, response) => {
  return await deleteInsightController().handle(request, response)
})

export { insightRouter }
