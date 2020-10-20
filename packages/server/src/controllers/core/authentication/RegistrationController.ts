import { Request, Response } from 'express'
import { RegistrarDTO } from '../../../dto/core/authentication/RegistrarDTO'
import { IUsuariosRepository } from '../../../repositories/core/authentication/IUsuariosRepository'
import { ITokenService } from '../../../services/core/authentication/TokenService'

export class RegistrationController {
  constructor(
    private usuarioRepository: IUsuariosRepository,
    private tokenService: ITokenService
  ) {}

  async execute(request: Request, response: Response): Promise<Response> {
    const registrar: RegistrarDTO = request.body
    if (!registrar.usuario || !registrar.senha) {
      return response.status(403).send({ message: 'Sem dados na requisição!' })
    }
    if (await this.usuarioRepository.findByUsuario(registrar.usuario)) {
      return response.status(403).send({ message: 'Usuario já cadastrado!' })
    }
    if (await this.usuarioRepository.findByEmail(registrar.email)) {
      return response.status(403).send({ message: 'E-mail já cadastrado!' })
    }
    const usuario = await this.usuarioRepository.create(registrar)
    const token = await this.tokenService.createToken({ usuario: usuario })
    return response.status(200).send({ token })
  }
}
