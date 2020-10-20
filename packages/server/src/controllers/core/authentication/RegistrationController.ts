import { Request, Response } from 'express'
import { RegistrarDTO } from '../../../dto/core/authentication/RegistrarDTO'
import { IUsuariosRepository } from '../../../repositories/core/authentication/IUsuariosRepository'
import { IAuthenticationService } from '../../../services/core/authentication/AuthenticationService'

export class RegistrationController {
  constructor(
    private usuarioRepository: IUsuariosRepository,
    private auth: IAuthenticationService
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
    console.log(usuario)
    return await this.auth.execute(usuario)
  }
}
