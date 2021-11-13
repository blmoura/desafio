import { Router } from 'express'
import createInsightController from '../../../../modules/insights/usecases/createInsight'

const insightRouter = Router()
insightRouter.post('/', async (request, response) => {
  return await createInsightController().handle(request, response)
})

export { insightRouter }
