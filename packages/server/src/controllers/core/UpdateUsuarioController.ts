import { Request, Response } from 'express'
import { BadRequestException } from '../../exceptions/BadRequestException'
import { HttpException } from '../../exceptions/HttpException'
import { IUsuarios } from '../../models/core/Usuarios'
import { IUpdateUsuarioService } from '../../services/core/UpdateUsuarioService'

export interface IUpdateUsuarioController {
  execute(request: Request, response: Response): Promise<Response>
}

export class UpdateUsuarioController implements IUpdateUsuarioController {
  constructor(private updateUsuario: IUpdateUsuarioService) {}

  async execute(request: Request, response: Response): Promise<Response> {
    const id = Number(request.params.id)
    try {
      let usuario: IUsuarios = request.body
      if (!usuario) {
        throw new BadRequestException('Sem dados na requisição!')
      }
      usuario = await this.updateUsuario.execute(id, usuario)
      return response.status(200).send({ data: { usuario } })
    } catch (error) {
      const err: HttpException = error
      return response
        .status(err.status || 500)
        .send({ error: { message: err.message } })
    }
  }
}
