import jwt from 'jsonwebtoken'
import { environment as env } from '../../../../../environment'
import { IPermissoes } from '../../models/core/Permissoes'
import { IUsuarios } from '../../models/core/Usuarios'

export interface IPayloadToken {
  usuario?: IUsuarios
  permissao?: IPermissoes
  iat?: number
  exp?: number
}

export interface ICreateTokenService {
  execute(payload: IPayloadToken): Promise<string>
}

export class CreateTokenService {
  async execute(payload: IPayloadToken): Promise<string> {
    if (!payload.usuario && !payload.permissao) {
      return null
    }
    return jwt.sign(payload, env.server.token.secret, { expiresIn: '1d' })
  }
}
