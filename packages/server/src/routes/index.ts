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
    /**
     * @api {get} /user/:id Get User information
     * @apiVersion 0.1.0
     * @apiName GetUser
     * @apiGroup User
     *
     * @apiParam {Number} id Users unique ID.
     *
     * @apiSuccess {String} firstname Firstname of the User.
     * @apiSuccess {String} lastname  Lastname of the User.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "firstname": "John",
     *       "lastname": "Doe"
     *     }
     *
     * @apiError UserNotFound The id of the User was not found.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 404 Not Found
     *     {
     *       "error": "UserNotFound"
     *     }
     */
    this.routes.get('/hello', async (request: Request, response: Response) => {
      const error = new HttpException(404, 'Not Found')
      return response.status(error.status).send({ error: error.message })
    })
  }
}

export default new MainRouter().routes
