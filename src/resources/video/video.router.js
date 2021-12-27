import { Router } from 'express'
import controllers from './video.controllers'

const router = Router()

// /api/videos
router
  .route('/')
  .get(controllers.getOne)
  .post(controllers.createOne)

// /api/videos/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

export default router
