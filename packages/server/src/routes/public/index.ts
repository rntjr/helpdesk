import express, { Request, Response } from 'express'
import { AuthenticationController } from '../../controllers/core/AuthenticationController'
import { RegistrationController } from '../../controllers/core/RegistrationController'
import { UsuariosRepository } from '../../repositories/core/UsuariosRepository'
import { CreateTokenService } from '../../services/core/CreateTokenService'
import { CreateUsuarioService } from '../../services/core/CreateUsuarioService'
import { IsUsuarioExists } from '../../services/core/IsUsuarioExists'
import { IsValidatePassword } from '../../services/core/IsValidatePassword'

class PublicRouter {
  public routes: express.Router

  constructor() {
    this.routes = express.Router()
    this.authenticationRouter()
    this.registrationRouter()
  }

  private authenticationRouter(): void {
    this.routes.post(
      '/authentication',
      async (request: Request, response: Response) => {
        return await new AuthenticationController(
          new UsuariosRepository(),
          new IsValidatePassword(new UsuariosRepository()),
          new CreateTokenService()
        ).execute(request, response)
      }
    )
  }

  private registrationRouter(): void {
    this.routes.post(
      '/registration',
      async (request: Request, response: Response) => {
        return await new RegistrationController(
          new CreateTokenService(),
          new CreateUsuarioService(
            new UsuariosRepository(),
            new IsUsuarioExists(new UsuariosRepository())
          )
        ).execute(request, response)
      }
    )
  }
}

export default new PublicRouter().routes
