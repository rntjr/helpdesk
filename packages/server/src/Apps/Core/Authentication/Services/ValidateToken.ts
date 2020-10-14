import jwt from 'jsonwebtoken'
import { environment as env } from '../../../../../../../environment'

export class TokenService {
  async execute(token: string): Promise<boolean> {
    if (!(await jwt.verify(token, env.server.token.secret))) {
      return false
    }
    return true
  }
}
