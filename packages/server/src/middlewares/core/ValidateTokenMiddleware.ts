import { NextFunction, Request, Response } from 'express'
import { BadRequestException } from '../../exceptions/BadRequestException'
import { HttpException } from '../../exceptions/HttpException'
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
    try {
      const token = request.headers.authorization.split(' ')[1]
      if (!token) {
        throw new BadRequestException('Token não enviado!')
      }
      await this.isValidateToken.execute(token)
      next()
    } catch (error) {
      const err: HttpException = error
      return response
        .status(err.status || 500)
        .send({ error: { message: err.message } })
    }
  }
}
