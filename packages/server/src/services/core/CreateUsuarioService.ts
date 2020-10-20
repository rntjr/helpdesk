import { IUsuarios } from '../../models/core/authentication/Usuarios'
import { IUsuariosRepository } from '../../repositories/core/authentication/IUsuariosRepository'

export interface ICreateUsuarioService {
  execute(usuario: IUsuarios): Promise<IUsuarios>
}

export class CreateUsuarioService implements ICreateUsuarioService {
  constructor(private userRepo: IUsuariosRepository) {}
  async execute(usuario: IUsuarios): Promise<IUsuarios> {
    if (!usuario.usuario || !usuario.senha || !usuario.email) {
      return null
    }
    return await this.userRepo.create(usuario)
  }
}
