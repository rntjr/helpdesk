import { Request, Response } from 'express'
import { RegistrarDTO } from '../../dto/core/RegistrarDTO'
import { BadRequestException } from '../../exceptions/BadRequestException'
import { HttpException } from '../../exceptions/HttpException'
import { IUsuariosRepository } from '../../repositories/core/UsuariosRepository'
import { ICreateTokenService } from '../../services/core/CreateTokenService'
import { IIsUsuarioExists } from '../../services/core/IsUsuarioExists'

export class RegistrationController {
  constructor(
    private usuarioRepository: IUsuariosRepository,
    private createToken: ICreateTokenService,
    private isUsuarioExists: IIsUsuarioExists
  ) {}

  async execute(request: Request, response: Response): Promise<Response> {
    const registrar: RegistrarDTO = request.body
    try {
      if (!registrar.usuario || !registrar.senha) {
        throw new BadRequestException('Sem dados na requisição!')
      }
      await this.isUsuarioExists.execute(registrar)
      const usuario = await this.usuarioRepository.create(registrar)
      const token = await this.createToken.execute({ usuario: usuario })
      return response.status(200).send({ token })
    } catch (error) {
      const err: HttpException = error
      return response.status(err.status || 500).send({ err: err.message })
    }
  }
}
