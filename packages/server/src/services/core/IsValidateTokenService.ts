import jwt from 'jsonwebtoken'
import { environment as env } from '../../../../../environment'
import { UnauthorizedException } from '../../exceptions/UnauthorizedException'

export interface IIsValidateTokenService {
  execute(token: string): Promise<void>
}

export class IsValidateTokenService {
  async execute(token: string): Promise<void> {
    if (!jwt.verify(token, env.server.token.secret)) {
      throw new UnauthorizedException('Token invalido!')
    }
  }
}
