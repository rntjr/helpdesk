import { Router, Request, Response } from 'express'
import AuthenticationController from '../../../Apps/Core/Authentication/Controllers/AuthenticationController'

const router = Router()

router.post('/', AuthenticationController.execute)

export default router
