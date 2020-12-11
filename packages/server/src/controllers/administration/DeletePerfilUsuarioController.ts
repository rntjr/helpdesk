import { Request, Response } from 'express'
import { UsuarioPerfilAcessoDTO } from '../../dto/administration/UsuarioPerfilAcessoDTO'
import { BadRequestException } from '../../exceptions/BadRequestException'
import { HttpException } from '../../exceptions/HttpException'
import { IDeletePerfilUsuarioService } from '../../services/administration/DeletePerfilUsuarioService'

export class DeletePerfilUsuarioController {
  constructor(
    private deletePerfilUsuarioService: IDeletePerfilUsuarioService
  ) {}

  async execute(request: Request, response: Response): Promise<Response> {
    const data: UsuarioPerfilAcessoDTO = request.body
    try {
      if (!data.id) {
        throw new BadRequestException('Sem dados na requisição!')
      }
      const del = await this.deletePerfilUsuarioService.execute({ id: data.id })
      if (!del) {
        return response.status(400)
      }
      return response.status(200)
    } catch (error) {
      const err: HttpException = error
      return response
        .status(err.status || 500)
        .send({ error: { message: err.message } })
    }
  }
}
