import { Request, Response } from 'express'
import { AcessarDTO } from '../../../dto/core/authentication/AcessarDTO'
import { IAuthenticationService } from '../../../services/core/authentication/AuthenticationService'
import { IValidatePasswordService } from '../../../services/core/authentication/ValidatePasswordService'

export class AuthenticationController {
  constructor(
    private auth: IAuthenticationService,
    private validatePassword: IValidatePasswordService
  ) {}

  async execute(request: Request, response: Response): Promise<Response> {
    const acessar: AcessarDTO = request.body
    if (!acessar.usuario || !acessar.senha) {
      return response.status(401).send({ message: 'Sem dados na requisição!' })
    }
    if (!this.validatePassword.execute(acessar)) {
      return response
        .status(401)
        .send({ message: 'Usuario ou senha inválidos!' })
    }
    return await this.auth.execute(acessar)
  }
}
