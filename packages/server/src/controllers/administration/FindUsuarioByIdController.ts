import { Request, Response } from 'express'
import { BadRequestException } from '../../exceptions/BadRequestException'
import { HttpException } from '../../exceptions/HttpException'
import { IUsuariosRepository } from '../../repositories/core/UsuariosRepository'

export class FindUsuarioByIdController {
  constructor(private usuarioRepo: IUsuariosRepository) {}

  async execute(request: Request, response: Response): Promise<Response> {
    const id = Number(request.params.id)
    try {
      const usuario = await this.usuarioRepo.findById(id)
      if (!usuario.usuario) {
        throw new BadRequestException('Usuario não encontrado')
      }
      return response.status(200).send(usuario)
    } catch (error) {
      const err: HttpException = error
      return response
        .status(err.status || 500)
        .send({ error: { message: err.message } })
    }
  }
}
