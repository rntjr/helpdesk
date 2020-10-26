import { IUsuariosRepository } from '../../repositories/core/UsuariosRepository'

export interface IDeleteUsuarioService {
  execute(id: number): Promise<boolean>
}

export class DeleteUsuarioService implements IDeleteUsuarioService {
  constructor(private usuarioRepo: IUsuariosRepository) {}

  async execute(id: number): Promise<boolean> {
    if (!id) {
      return null
    }
    return await this.usuarioRepo.delete(id)
  }
}
