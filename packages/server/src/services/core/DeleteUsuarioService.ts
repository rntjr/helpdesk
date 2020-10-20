import { IUsuariosRepository } from '../../repositories/core/authentication/IUsuariosRepository'

export interface IDeleteUsuarioService {
  execute(id: number): Promise<boolean>
}

export class DeleteUsuarioService implements IDeleteUsuarioService {
  constructor(private userRepo: IUsuariosRepository) {}
  async execute(id: number): Promise<boolean> {
    if (!id) {
      return null
    }
    return await this.userRepo.delete(id)
  }
}
