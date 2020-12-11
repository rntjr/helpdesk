import express from 'express'
import usuarios from './usuarios'

class AdministrationRouter {
  public routes: express.Router
  constructor() {
    this.routes = express.Router()
    this.usuariosRouter()
  }

  private usuariosRouter(): void {
    this.routes.use('/usuario', usuarios)
  }
}

export default new AdministrationRouter().routes
