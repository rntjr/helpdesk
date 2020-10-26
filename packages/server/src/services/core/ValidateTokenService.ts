import jwt from 'jsonwebtoken'
import { environment as env } from '../../../../../environment'

export interface IValidateTokenService {
  execute(token: boolean): Promise<boolean>
}

export class ValidateTokenService {
  async execute(token: string): Promise<boolean> {
    if (!jwt.verify(token, env.server.token.secret)) {
      return false
    }
    return true
  }
}
