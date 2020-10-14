import { ITokenPayload } from '../Repositories/ITokenPayload'

import jwt from 'jsonwebtoken'
import { environment as env } from '../../../../../../../environment'
export class CreateToken {
  async execute(payload: ITokenPayload): Promise<string> {
    return await jwt.sign(payload, env.server.token.secret)
  }
}
