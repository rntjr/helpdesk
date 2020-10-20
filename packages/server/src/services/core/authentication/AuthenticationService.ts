import { Response } from 'express'
import { IUsuarios } from '../../../models/core/authentication/Usuarios'
import { IUsuariosRepository } from '../../../repositories/core/authentication/IUsuariosRepository'
import { TokenService } from './TokenService'

export interface IAuthenticationService {
  execute(usuarios: IUsuarios): Promise<Response>
}

export class AuthenticationService implements IAuthenticationService {
  constructor(
    private response: Response,
    private usuarioRepository: IUsuariosRepository,
    private tokenService: TokenService
  ) {}

  async execute(usuarios: IUsuarios): Promise<Response> {
    const usuario = await this.usuarioRepository.findByUsuario(usuarios.usuario)
    if (!usuario) {
      return this.response
        .status(404)
        .send({ message: 'Usuario não encontrado' })
    }
    delete usuario.senha
    const token = await this.tokenService.createToken({ usuario: usuario })
    return this.response.status(200).send({ token })
  }
}
