import { Router } from 'express'
import RegistrationController from '../../../controllers/core/authentication/RegistrationController'

const router = Router()

router.post('/', RegistrationController.execute)

export default router
