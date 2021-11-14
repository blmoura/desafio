import { Router } from 'express'
import { insightRouter } from './insight.routes'
import { tagRouter } from './tag.routes'

const router = Router()

router.use('/insights', insightRouter)
router.use('/tags', tagRouter)

export { router }
