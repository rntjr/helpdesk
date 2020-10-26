import { IUsuarios } from '../../models/core/Usuarios'
import { IUsuariosRepository } from '../../repositories/core/UsuariosRepository'

export interface IUpdateUsuarioService {
  execute(id: number, data: IUsuarios): Promise<IUsuarios>
}

export class UpdateUsuarioService implements IUpdateUsuarioService {
  constructor(private usuarioRepo: IUsuariosRepository) {}

  async execute(id: number, usuarios: IUsuarios): Promise<IUsuarios> {
    if (!usuarios) {
      return null
    }
    delete usuarios.id
    return await this.usuarioRepo.update(id, usuarios)
  }
}
