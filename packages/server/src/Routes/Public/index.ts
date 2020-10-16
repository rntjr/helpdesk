import { Router } from 'express'
import authenticationRoute from './Authentication'

const router = Router()

router.use('/auth', authenticationRoute)

export default router
