import { Router } from 'express'
import AuthenticationController from '../../../controllers/core/authentication/AuthenticationController'

const router = Router()

router.post('/', AuthenticationController.execute)

export default router
