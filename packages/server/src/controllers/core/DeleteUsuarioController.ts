import { Request, Response } from 'express'
import { HttpException } from '../../exceptions/HttpException'
import { IDeleteUsuarioService } from '../../services/core/DeleteUsuarioService'

export interface IDeleteUsuarioController {
  execute(request: Request, response: Response): Promise<Response>
}

export class DeleteUsuarioController implements IDeleteUsuarioController {
  constructor(private deleteUsuario: IDeleteUsuarioService) {}

  async execute(request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    try {
      if (!id) {
        return response
          .status(401)
          .send({ message: 'Sem dados na requisição!' })
      }
      const del = await this.deleteUsuario.execute(Number(id))
      if (!del) {
        return response.status(400)
      }
      return response.status(200)
    } catch (error) {
      const err: HttpException = error
      return response
        .status(err.status || 500)
        .send({ error: { message: err.message } })
    }
  }
}
