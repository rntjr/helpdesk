import { AcessarDTO } from '../../../dto/core/authentication/AcessarDTO'
import bcrypt from 'bcrypt'
import { IUsuarios } from '../../../models/core/authentication/Usuarios'
import { IUsuariosRepository } from '../../../repositories/core/authentication/IUsuariosRepository'

export interface IValidatePasswordService {
  execute(usuarios: IUsuarios): Promise<boolean>
}

export class ValidatePasswordService implements IValidatePasswordService {
  constructor(private usuarioRepository: IUsuariosRepository) {}

  async execute(acessar: AcessarDTO): Promise<boolean> {
    const senha = await this.usuarioRepository.findByUsuario(acessar.usuario)
    if (!bcrypt.compareSync(acessar.senha, senha.senha)) {
      return false
    }
    return true
  }
}
