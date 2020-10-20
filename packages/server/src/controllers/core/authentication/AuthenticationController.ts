import { Request, Response } from 'express'
import { AcessarDTO } from '../../../dto/AcessarDTO'
import { AuthenticationService } from '../../../services/core/authentication/AuthenticationService'
import validatePassword from '../../../services/core/authentication/ValidatePasswordService'

class AuthenticationController {
  async execute(request: Request, response: Response): Promise<Response> {
    const acessar: AcessarDTO = request.body
    if (!acessar.usuario || !acessar.senha) {
      return response.status(403).send({ message: 'Sem dados na requisição!' })
    }
    if (!validatePassword.execute(acessar)) {
      return response
        .status(403)
        .send({ message: 'Usuario ou senha inválidos!' })
    }
    const auth = new AuthenticationService(response)
    return await auth.createToken(acessar)
  }
}

export default new AuthenticationController()
