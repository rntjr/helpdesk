import jwt from 'jsonwebtoken'
import { environment as env } from '../../../../../../../environment'

export interface TokenPayload {
  id: number
  iat: number
  exp: number
}

export class TokenService {
  async create(payload: TokenPayload): Promise<string> {
    return await jwt.sign(payload, env.server.token.secret)
  }

  async validate(token: string): Promise<boolean> {
    if (!(await jwt.verify(token, env.server.token.secret))) {
      return false
    }
    return true
  }
}
