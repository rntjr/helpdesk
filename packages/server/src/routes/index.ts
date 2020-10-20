import express, { Request, Response } from 'express'
import { CreateUsuarioController } from '../controllers/core/CreateUsuarioController'
import publicRoute from './public'

const app = express.Router()

app.get('/hello', async (request: Request, response: Response) => {
  const create = new CreateUsuarioController()
  return create.execute(request, response)
})
app.use('/public', publicRoute)
// router.use('/private')

export default app
