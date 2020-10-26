import bcrypt from 'bcrypt'
import { AcceptedException } from '../../exceptions/AcceptedException'
import { IUsuarios } from '../../models/core/Usuarios'
import { IUsuariosRepository } from '../../repositories/core/UsuariosRepository'

export interface IIsValidatePassword {
  execute(data: IUsuarios): Promise<void>
}

export class IsValidatePassword implements IIsValidatePassword {
  constructor(private usuarioRepo: IUsuariosRepository) {}

  async execute(usuarios: IUsuarios): Promise<void> {
    const senha = await this.usuarioRepo.findByUsuario(usuarios.usuario)
    if (!senha) {
      throw new AcceptedException('Usuario não existe!')
    }
    if (!bcrypt.compareSync(usuarios.senha, senha.senha)) {
      throw new AcceptedException('Senha inválida!')
    }
  }
}
