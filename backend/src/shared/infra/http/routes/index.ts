import { Router } from 'express'
import { insightRouter } from './insight.routes'

const router = Router()

router.use('/insights', insightRouter)

export { router }
