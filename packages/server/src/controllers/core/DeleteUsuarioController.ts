import { Request, Response } from 'express'
import { IDeleteUsuarioService } from '../../services/core/DeleteUsuarioService'

export interface IDeleteUsuarioController {
  execute(request: Request, response: Response): Promise<Response>
}

export class IDeleteUsuarioController implements IDeleteUsuarioController {
  constructor(private deleteUsuario: IDeleteUsuarioService) {}

  async execute(request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    if (!id) {
      return response.status(401).send({ message: 'Sem dados na requisição!' })
    }
    const del = await this.deleteUsuario.execute(Number(id))
    if (!del) {
      return response.status(400)
    }
    return response.status(200)
  }
}
