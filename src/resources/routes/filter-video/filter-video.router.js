import { Router } from 'express'
import controller from '../../controllers/video/video.controller'

const router = Router()

// /api/filter-videos
router.route('/').get(controller.getFilteredMany)

export default router
