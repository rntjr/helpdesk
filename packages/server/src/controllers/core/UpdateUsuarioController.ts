import { Request, Response } from 'express'
import { IUsuarios } from '../../models/core/Usuarios'
import { IUpdateUsuarioService } from '../../services/core/UpdateUsuarioService'

export interface IUpdateUsuarioController {
  execute(request: Request, response: Response): Promise<Response>
}

export class IUpdateUsuarioController implements IUpdateUsuarioController {
  constructor(private updateUsuario: IUpdateUsuarioService) {}

  async execute(request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    let usuario: IUsuarios = request.body
    if (!usuario) {
      return response.status(401).send({ message: 'Sem dados na requisição!' })
    }
    usuario = await this.updateUsuario.execute(Number(id), usuario)
    return response.status(200).send({ usuario })
  }
}
