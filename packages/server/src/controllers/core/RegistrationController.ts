import { Request, Response } from 'express'
import { RegistrarDTO } from '../../dto/core/RegistrarDTO'
import { BadRequestException } from '../../exceptions/BadRequestException'
import { HttpException } from '../../exceptions/HttpException'
import { ICreateTokenService } from '../../services/core/CreateTokenService'
import { ICreateUsuarioService } from '../../services/core/CreateUsuarioService'

export class RegistrationController {
  constructor(
    private createToken: ICreateTokenService,
    private createUsuario: ICreateUsuarioService
  ) {}

  async execute(request: Request, response: Response): Promise<Response> {
    const registrar: RegistrarDTO = request.body
    try {
      if (!registrar.usuario || !registrar.email || !registrar.senha) {
        throw new BadRequestException('Sem dados na requisição!')
      }
      const usuario = await this.createUsuario.execute(registrar)
      const token = await this.createToken.execute({ usuario: usuario })
      return response.status(200).send({ data: { token } })
    } catch (error) {
      const err: HttpException = error
      return response
        .status(err.status || 500)
        .send({ error: { message: err.message } })
    }
  }
}
