import { Router } from 'express'
import createInsightController from '../../../../modules/insights/usecases/createInsight'
import listInsightController from '../../../../modules/insights/usecases/listAllInsights'

const insightRouter = Router()
insightRouter.post('/', async (request, response) => {
  return await createInsightController().handle(request, response)
})

insightRouter.get('/', async (request, response) => {
  return await listInsightController().handle(request, response)
})

export { insightRouter }
