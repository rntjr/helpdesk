import { Request, Response, ErrorRequestHandler } from 'express'
import { RegistrarDTO } from '../DTO/RegistrarDTO'
import { AuthenticationService } from '../Services/AuthenticationService'
import usuarioRepository from '../Repositories/Implementation/IUsuariosRepository'

class RegistrationController {
  async execute(
    error: ErrorRequestHandler,
    request: Request,
    response: Response
  ): Promise<Response> {
    const registrar: RegistrarDTO = request.body
    if (!registrar) {
      return response.status(403).send({ message: 'Sem dados na requisição!' })
    }
    const usuario = await usuarioRepository.create(registrar)
    const auth = new AuthenticationService(response, error)
    return await auth.createToken(usuario)
  }
}

export default new RegistrationController()
