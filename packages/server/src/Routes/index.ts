import express, { Request, Response } from 'express'
import publicRoute from './Public'

const app = express.Router()

app.get('/hello', (request: Request, response: Response) => {
  return response.send({ message: 'Hello World' })
})
app.use('/public', publicRoute)
// router.use('/private')

export default app
