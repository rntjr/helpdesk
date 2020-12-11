import { Request, Response } from 'express'
import { BadRequestException } from '../../exceptions/BadRequestException'
import { HttpException } from '../../exceptions/HttpException'
import { IUsuarios } from '../../models/core/Usuarios'
import { ICreateUsuarioService } from '../../services/core/CreateUsuarioService'

export interface ICreateUsuarioController {
  execute(request: Request, response: Response): Promise<Response>
}

export class CreateUsuarioController implements ICreateUsuarioController {
  constructor(private createUsuario: ICreateUsuarioService) {}

  async execute(request: Request, response: Response): Promise<Response> {
    let usuario: IUsuarios = request.body
    try {
      if (!usuario.usuario || !usuario.email || !usuario.senha) {
        throw new BadRequestException('Sem dados na requisição!')
      }
      usuario = await this.createUsuario.execute(usuario)
      return response.status(200).send({ data: { usuario } })
    } catch (error) {
      const err: HttpException = error
      return response
        .status(err.status || 500)
        .send({ error: { message: err.message } })
    }
  }
}
