import { IUsuariosPerfisAcesso } from '../../models/core/UsuariosPerfisAcesso'
import { IUsuariosPerfisAcessoRepository } from '../../repositories/core/UsuariosPerfisAcessoRepository'

export interface IAddPerfilUsuarioService {
  execute(data: IUsuariosPerfisAcesso): Promise<IUsuariosPerfisAcesso[]>
}

export class AddPerfilUsuarioService implements IAddPerfilUsuarioService {
  constructor(private perfilAcessoRepo: IUsuariosPerfisAcessoRepository) {}

  async execute(data: IUsuariosPerfisAcesso): Promise<IUsuariosPerfisAcesso[]> {
    await this.perfilAcessoRepo.create(data)
    return await this.perfilAcessoRepo.findPerfisByUsuarioId(data.usuario.id)
  }
}
