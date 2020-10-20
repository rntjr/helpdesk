import { UpdateResult } from 'typeorm'
import { IUsuarios } from '../../models/core/authentication/Usuarios'
import { IUsuariosRepository } from '../../repositories/core/authentication/IUsuariosRepository'

export interface IUpdateUsuarioService {
  execute(id: number, usuario: IUsuarios): Promise<UpdateResult>
}

export class UpdateUsuarioService implements IUpdateUsuarioService {
  constructor(private userRepo: IUsuariosRepository) {}
  async execute(id: number, usuario: IUsuarios): Promise<UpdateResult> {
    if (!id) {
      return null
    }
    return await this.userRepo.update(id, usuario)
  }
}
