import { Request, Response } from 'express'
import { IUsuarios } from '../../models/core/Usuarios'
import { IUsuariosRepository } from '../../repositories/core/UsuariosRepository'
import { ICreateUsuarioService } from '../../services/core/CreateUsuarioService'

export interface ICreateUsuarioController {
  execute(request: Request, response: Response): Promise<Response>
}

export class ICreateUsuarioController implements ICreateUsuarioController {
  constructor(
    private createUsuario: ICreateUsuarioService,
    private usuarioRepo: IUsuariosRepository
  ) {}

  async execute(request: Request, response: Response): Promise<Response> {
    let usuario: IUsuarios = request.body
    if (!usuario.usuario || !usuario.senha) {
      return response.status(401).send({ message: 'Sem dados na requisição!' })
    }
    usuario = await this.createUsuario.execute(usuario)
    return response.status(200).send({ usuario })
  }
}
