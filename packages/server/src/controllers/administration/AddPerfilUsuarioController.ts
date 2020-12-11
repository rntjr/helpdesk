import { Request, Response } from 'express'
import { UsuarioPerfilAcessoDTO } from '../../dto/administration/UsuarioPerfilAcessoDTO'
import { BadRequestException } from '../../exceptions/BadRequestException'
import { HttpException } from '../../exceptions/HttpException'
import { IAddPerfilUsuarioService } from '../../services/administration/AddPerfilUsuarioService'

export class AddPerfilUsuarioController {
  constructor(private addPerfilUsuario: IAddPerfilUsuarioService) {}

  async execute(request: Request, response: Response): Promise<Response> {
    const data: UsuarioPerfilAcessoDTO = request.body
    try {
      if (!data.perfil || !data.usuario) {
        throw new BadRequestException('Sem dados na requisição!')
      }
      const perfisAcesso = await this.addPerfilUsuario.execute(data)
      return response.send({ data: { perfisAcesso } }).status(200)
    } catch (error) {
      const err: HttpException = error
      return response
        .status(err.status || 500)
        .send({ error: { message: err.message } })
    }
  }
}
