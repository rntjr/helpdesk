import { IUsuarios } from '../../models/core/Usuarios'
import { IUsuariosRepository } from '../../repositories/core/UsuariosRepository'
import { IIsUsuarioExists } from './IsUsuarioExists'

export interface ICreateUsuarioService {
  execute(data: IUsuarios): Promise<IUsuarios>
}

export class CreateUsuarioService implements ICreateUsuarioService {
  constructor(
    private usuarioRepo: IUsuariosRepository,
    private isUsuarioExists: IIsUsuarioExists
  ) {}

  async execute(usuarios: IUsuarios): Promise<IUsuarios> {
    delete usuarios.id
    await this.isUsuarioExists.execute(usuarios)
    return await this.usuarioRepo.create(usuarios)
  }
}
