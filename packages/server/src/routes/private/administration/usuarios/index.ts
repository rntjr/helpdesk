import express, { Request, Response } from 'express'
import { AddPerfilUsuarioController } from '../../../../controllers/administration/AddPerfilUsuarioController'
import { FindUsuarioByIdController } from '../../../../controllers/administration/FindUsuarioByIdController'
import { CreateUsuarioController } from '../../../../controllers/core/CreateUsuarioController'
import { DeleteUsuarioController } from '../../../../controllers/core/DeleteUsuarioController'
import { UpdateUsuarioController } from '../../../../controllers/core/UpdateUsuarioController'
import { UsuariosPerfisAcessoRepository } from '../../../../repositories/core/UsuariosPerfisAcessoRepository'
import { UsuariosRepository } from '../../../../repositories/core/UsuariosRepository'
import { AddPerfilUsuarioService } from '../../../../services/administration/AddPerfilUsuarioService'
import { CreateUsuarioService } from '../../../../services/core/CreateUsuarioService'
import { DeleteUsuarioService } from '../../../../services/core/DeleteUsuarioService'
import { IsUsuarioExists } from '../../../../services/core/IsUsuarioExists'
import { UpdateUsuarioService } from '../../../../services/core/UpdateUsuarioService'

class UsuariosRouter {
  public routes: express.Router

  constructor() {
    this.routes = express.Router()
    this.usuariosRouter()
    this.usuariosPerfisRouter()
  }

  private usuariosRouter(): void {
    /*
     * Busca usuario por ID
     */
    this.routes.get('/:id', async (request: Request, response: Response) => {
      return await new FindUsuarioByIdController(
        new UsuariosRepository()
      ).execute(request, response)
    })
    /*
     * Cria usuario
     */
    this.routes.post('/', async (request: Request, response: Response) => {
      return await new CreateUsuarioController(
        new CreateUsuarioService(
          new UsuariosRepository(),
          new IsUsuarioExists(new UsuariosRepository())
        )
      ).execute(request, response)
    })
    /*
     * Altera usuario
     */
    this.routes.put('/:id', async (request: Request, response: Response) => {
      return await new UpdateUsuarioController(
        new UpdateUsuarioService(new UsuariosRepository())
      ).execute(request, response)
    })
    /*
     * Delete usuario
     */
    this.routes.delete('/:id', async (request: Request, response: Response) => {
      return await new DeleteUsuarioController(
        new DeleteUsuarioService(new UsuariosRepository())
      ).execute(request, response)
    })
  }

  private usuariosPerfisRouter(): void {
    /*
     * Add Perfis
     */
    this.routes.post(
      '/perfis',
      async (request: Request, response: Response) => {
        return await new AddPerfilUsuarioController(
          new AddPerfilUsuarioService(new UsuariosPerfisAcessoRepository())
        ).execute(request, response)
      }
    )
    /*
     * Delete Perfis
     */
    this.routes.post(
      '/perfis/:id',
      async (request: Request, response: Response) => {
        return null
      }
    )
  }
}

export default new UsuariosRouter().routes
