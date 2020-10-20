import jwt from 'jsonwebtoken'
import { environment as env } from '../../../../../../environment'
import { IUsuarios } from '../../../models/core/authentication/Usuarios'
import { AcessoGrupoPermissao } from '../../../models/core/authentication/AcessoGrupoPermissao'

export interface IPayloadToken {
  usuario?: IUsuarios
  permissao?: AcessoGrupoPermissao
  iat?: number
  exp?: number
}

export interface ITokenService {
  createToken(payload: IPayloadToken): Promise<string>
  validateToken(token: string): Promise<boolean>
}

export class TokenService implements ITokenService {
  async createToken(payload: IPayloadToken): Promise<string> {
    if (!payload.usuario && !payload.permissao) {
      return null
    }
    return await jwt.sign(payload, env.server.token.secret)
  }

  async validateToken(token: string): Promise<boolean> {
    if (!(await jwt.verify(token, env.server.token.secret))) {
      return false
    }
    return true
  }
}
