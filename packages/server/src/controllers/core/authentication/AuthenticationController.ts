import { Request, Response } from 'express'
import { AcessarDTO } from '../../../dto/core/authentication/AcessarDTO'
import { IUsuariosRepository } from '../../../repositories/core/authentication/IUsuariosRepository'
import { ITokenService } from '../../../services/core/authentication/TokenService'
import { IValidatePasswordService } from '../../../services/core/authentication/ValidatePasswordService'

export class AuthenticationController {
  constructor(
    private usuarioRepository: IUsuariosRepository,
    private validatePassword: IValidatePasswordService,
    private tokenService: ITokenService
  ) {}

  async execute(request: Request, response: Response): Promise<Response> {
    const acessar: AcessarDTO = request.body
    if (!acessar.usuario || !acessar.senha) {
      return response.status(401).send({ message: 'Sem dados na requisição!' })
    }
    if (!(await this.validatePassword.execute(acessar))) {
      return response
        .status(401)
        .send({ message: 'Usuario ou senha inválidos!' })
    }
    const usuario = await this.usuarioRepository.findByUsuario(acessar.usuario)
    if (!usuario) {
      return response.status(404).send({ message: 'Usuario não encontrado' })
    }
    delete usuario.senha
    const token = await this.tokenService.createToken({ usuario: usuario })
    return response.status(200).send({ token })
  }
}
