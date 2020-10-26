import express, { Request, Response } from 'express'
import publicRoute from './public'
import privateRoute from './private'
import { HttpException } from '../exceptions/HttpException'

const app = express.Router()

app.get('/hello', async (request: Request, response: Response) => {
  const error = new HttpException(404, 'Not Found')
  return response.status(error.status).send({ error: error.message })
})
app.use('/public', publicRoute)
app.use('/private', privateRoute)

export default app
