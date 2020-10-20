import jwt from 'jsonwebtoken'
import { IPayloadToken } from './IPayloadToken'
import { environment as env } from '../../../../../../environment'

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
