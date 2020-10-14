import { NextFunction, Request } from 'express'

export class Authentication {
  async execute(request: Request, next: NextFunction): Promise<void> {
    return null
  }
}
