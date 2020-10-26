import { IUsuarios } from '../../models/core/Usuarios'
import { IUsuariosRepository } from '../../repositories/core/UsuariosRepository'

export interface ICreateUsuarioService {
  execute(data: IUsuarios): Promise<IUsuarios>
}

export class CreateUsuarioService implements ICreateUsuarioService {
  constructor(private usuarioRepo: IUsuariosRepository) {}

  async execute(usuarios: IUsuarios): Promise<IUsuarios> {
    if (!usuarios) {
      return null
    }
    delete usuarios.id
    return await this.usuarioRepo.create(usuarios)
  }
}
