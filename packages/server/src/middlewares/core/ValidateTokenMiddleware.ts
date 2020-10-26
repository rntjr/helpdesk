import { NextFunction, Request, Response } from 'express'
import { ITokenService } from '../../services/core/TokenService'

export interface IValidateTokenMiddleware {
  execute(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response>
}

export class ValidateTokenMiddleware {
  constructor(private tokenService: ITokenService) {}

  async execute(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response> {
    const token = request.headers.authorization.split(' ')[1]
    if (!token) {
      return response.status(401).send({ message: 'Token não enviado' })
    }
    if (!(await this.tokenService.validateToken(token))) {
      return response.status(401).send({ message: 'Token inválido!' })
    }
    next()
  }
}
