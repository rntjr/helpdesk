import express, { Request, Response } from 'express'
import publicRoute from './public'
import privateRoute from './private'
import { HttpException } from '../exceptions/HttpException'

class MainRouter {
  public routes: express.Router

  constructor() {
    this.routes = express.Router()
    this.publicRouter()
    this.privateRouter()
    this.testRoutes()
  }

  private publicRouter(): void {
    this.routes.use('/public', publicRoute)
  }

  private privateRouter(): void {
    this.routes.use('/private', privateRoute)
  }

  private testRoutes(): void {
    this.routes.get('/hello', async (request: Request, response: Response) => {
      const error = new HttpException(404, 'Not Found')
      return response.status(error.status).send({ error: error.message })
    })
  }
}

export default new MainRouter().routes
