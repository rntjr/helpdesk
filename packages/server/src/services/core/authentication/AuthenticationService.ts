import { Response } from 'express'
import jwt from 'jsonwebtoken'
import { environment as env } from '../../../../../../environment'
import { Usuarios } from '../../../models/core/authentication/Usuarios'
import usuarioRepository from '../../../repositories/implementations/core/authentication/UsuariosRepository'

export class AuthenticationService {
  constructor(private response: Response) {}
  public async createToken(usuarios: Usuarios): Promise<Response> {
    if (!usuarios.usuario) {
      return this.response.status(401).send({ err: 'Dados não enviados' })
    }
    const data = await usuarioRepository.findByUsuario(usuarios.usuario)
    if (!data) {
      return this.response.status(401).send({ err: 'Usuario não encontrado!' })
    }
    delete data.senha
    const token = await jwt.sign({ data }, env.server.token.secret)
    return this.response.status(401).send({ token })
  }

  /* public async validateToken(token: string): Promise<boolean> {
    return null
  } */
}
