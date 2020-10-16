import { Router } from 'express'
import publicRoute from './Public'

const router = Router()

router.use('/public', publicRoute)
// router.use('/private')

export { router }
