import { IUsuariosPerfisAcesso } from '../../models/core/UsuariosPerfisAcesso'
import { IUsuariosPerfisAcessoRepository } from '../../repositories/core/UsuariosPerfisAcessoRepository'

export interface IDeletePerfilUsuarioService {
  execute(data: IUsuariosPerfisAcesso): Promise<boolean>
}

export class DeletePerfilUsuarioService {
  constructor(private perfilAcessoRepo: IUsuariosPerfisAcessoRepository) {}

  async execute(data: IUsuariosPerfisAcesso): Promise<boolean> {
    return await this.perfilAcessoRepo.delete(data.id)
  }
}
