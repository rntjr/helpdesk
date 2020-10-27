import { AcceptedException } from '../../exceptions/AcceptedException'
import { IUsuarios } from '../../models/core/Usuarios'
import { IUsuariosRepository } from '../../repositories/core/UsuariosRepository'

export interface IIsUsuarioExists {
  execute(data: IUsuarios): Promise<void>
}

export class IsUsuarioExists implements IIsUsuarioExists {
  constructor(private usuarioRepo: IUsuariosRepository) {}

  async execute(usuarios: IUsuarios): Promise<void> {
    if (await this.usuarioRepo.find({ email: usuarios.email })) {
      throw new AcceptedException('E-mail já cadastrado!')
    }
    if (await this.usuarioRepo.find({ usuario: usuarios.usuario })) {
      throw new AcceptedException('Usuario já cadastrado')
    }
  }
}
