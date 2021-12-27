import { Router } from 'express'
import controller from '../../controllers/video/video.controller'

const router = Router()

// /api/videos
router
  .route('/')
  .get(controller.getMany)
  .post(controller.createOne)

// /api/videos/:id
router.route('/:id').delete(controller.removeOne)

export default router
