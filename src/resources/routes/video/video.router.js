import { Router } from 'express'
import controller from '../../controllers/video/video.controller'

const router = Router()

// /api/videos
router
  .route('/')
  .get(controller.getMany)
  .post(controller.createMany)

// /api/videos/:video
router
  .route('/:video')
  .get(controller.getOne)
  .delete(controller.removeOne)

export default router
