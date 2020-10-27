import express, { Request, Response } from 'express'
import { FindUsuarioByIdController } from '../../../controllers/administration/FindUsuarioByIdController'
import { CreateUsuarioController } from '../../../controllers/core/CreateUsuarioController'
import { DeleteUsuarioController } from '../../../controllers/core/DeleteUsuarioController'
import { UpdateUsuarioController } from '../../../controllers/core/UpdateUsuarioController'
import { UsuariosRepository } from '../../../repositories/core/UsuariosRepository'
import { CreateUsuarioService } from '../../../services/core/CreateUsuarioService'
import { DeleteUsuarioService } from '../../../services/core/DeleteUsuarioService'
import { IsUsuarioExists } from '../../../services/core/IsUsuarioExists'
import { UpdateUsuarioService } from '../../../services/core/UpdateUsuarioService'

class AdministrationRouter {
  public routes: express.Router
  constructor() {
    this.routes = express.Router()
    this.usuariosRouter()
  }

  private usuariosRouter(): void {
    /*
     * Busca usuario por ID
     */
    this.routes.get(
      '/usuario/:id',
      async (request: Request, response: Response) => {
        return await new FindUsuarioByIdController(
          new UsuariosRepository()
        ).execute(request, response)
      }
    )
    /*
     * Cria usuario
     */
    this.routes.post(
      '/usuario',
      async (request: Request, response: Response) => {
        return await new CreateUsuarioController(
          new CreateUsuarioService(
            new UsuariosRepository(),
            new IsUsuarioExists(new UsuariosRepository())
          )
        ).execute(request, response)
      }
    )
    /*
     * Altera usuario
     */
    this.routes.put(
      '/usuario/:id',
      async (request: Request, response: Response) => {
        return await new UpdateUsuarioController(
          new UpdateUsuarioService(new UsuariosRepository())
        ).execute(request, response)
      }
    )
    /*
     * Delete usuario
     */
    this.routes.delete(
      '/usuario/:id',
      async (request: Request, response: Response) => {
        return await new DeleteUsuarioController(
          new DeleteUsuarioService(new UsuariosRepository())
        ).execute(request, response)
      }
    )
  }
}

export default new AdministrationRouter().routes
