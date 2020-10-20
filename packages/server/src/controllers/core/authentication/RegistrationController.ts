import { Request, Response } from 'express'
import { RegistrarDTO } from '../../../dto/RegistrarDTO'
import usuarioRepository from '../../../repositories/implementations/core/authentication/UsuariosRepository'
import { AuthenticationService } from '../../../services/core/authentication/AuthenticationService'

class RegistrationController {
  async execute(request: Request, response: Response): Promise<Response> {
    const registrar: RegistrarDTO = request.body
    if (!registrar.usuario || !registrar.senha) {
      return response.status(403).send({ message: 'Sem dados na requisição!' })
    }
    const usuario = await usuarioRepository.create(registrar)
    if (!usuario) {
      return response.status(403).send({ message: 'Usuario já cadastrado!' })
    }
    const auth = new AuthenticationService(response)
    return await auth.createToken(usuario)
  }
}

export default new RegistrationController()
