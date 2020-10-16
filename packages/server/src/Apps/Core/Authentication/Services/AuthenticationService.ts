import { Response, ErrorRequestHandler } from 'express'
import jwt from 'jsonwebtoken'
import { environment as env } from '../../../../../../../environment'
import { Usuarios } from '../Models/Usuarios'
import usuarioRepository from '../Repositories/Implementation/IUsuariosRepository'

export class AuthenticationService {
  constructor(private response: Response, private error: ErrorRequestHandler) {}
  public async createToken(usuarios: Usuarios): Promise<Response> {
    if (!usuarios) {
      return this.response.status(401).send({ err: this.error })
    }
    const data = await usuarioRepository.findByUsuario(usuarios.usuario)
    if (!data) {
      return this.response.status(401).send({ err: 'Usuario não encontrado!' })
    }
    const token = await jwt.sign({ usuarios }, env.server.token.secret)
    return this.response.status(401).send({ token })
  }

  public async validateToken(token: string): Promise<boolean> {
    return null
  }
}
