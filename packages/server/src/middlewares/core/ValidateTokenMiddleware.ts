import { NextFunction, Request, Response } from 'express'
import { IIsValidateTokenService } from '../../services/core/IsValidateTokenService'

export interface IIsValidateTokenMiddleware {
  execute(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response>
}

export class IsValidateTokenMiddleware implements IIsValidateTokenMiddleware {
  constructor(private isValidateToken: IIsValidateTokenService) {}

  async execute(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response> {
    const token = request.headers.authorization.split(' ')[1]
    if (!token) {
      return response.status(401).send({ message: 'Token não enviado' })
    }
    await this.isValidateToken.execute(token)
    next()
  }
}
