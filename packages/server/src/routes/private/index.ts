import express from 'express'
import helpdeskRoutes from './helpdesk'
import administrationRoutes from './administration'

class PrivateRouter {
  public routes: express.Router

  constructor() {
    this.routes = express.Router()
    this.privateRoutes()
  }

  private privateRoutes(): void {
    this.routes.use('/administration', administrationRoutes)
    this.routes.use('/helpdesk', helpdeskRoutes)
  }
}

export default new PrivateRouter().routes
