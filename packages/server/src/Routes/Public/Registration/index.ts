import { Router } from 'express'
import RegistrationController from '../../../Apps/Core/Authentication/Controllers/RegistrationController'

const router = Router()

router.post('/', RegistrationController.execute)

export default router
