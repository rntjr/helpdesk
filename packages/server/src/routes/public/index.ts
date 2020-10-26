import { Router } from 'express'
import authenticationRoute from './authentication'
import registrationRoute from './registration'

const router = Router()

router.use('/auth', authenticationRoute)
router.use('/registration', registrationRoute)

export default router
