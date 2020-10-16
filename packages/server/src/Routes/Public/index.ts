import { Router } from 'express'
import authenticationRoute from './Authentication'
import registrationRoute from './Registration'

const router = Router()

router.use('/auth', authenticationRoute)
router.use('/register', registrationRoute)

export default router
