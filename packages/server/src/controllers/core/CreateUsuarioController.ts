import { Request, Response } from 'express'
import { UsuariosRepositoryImpl } from '../../repositories/implementations/UsuariosRepositoryImpl'
import { UpdateUsuarioService } from '../../services/core/UpdateUsuarioService'

export class CreateUsuarioController {
  async execute(request: Request, response: Response): Promise<Response> {
    const repo = new UpdateUsuarioService(new UsuariosRepositoryImpl())
    const result = await repo.execute(8, { nome: 'teste', senha: '123456' })
    return response.send({ message: result })
  }
}
