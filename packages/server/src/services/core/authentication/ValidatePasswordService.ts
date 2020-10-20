import { AcessarDTO } from '../../../dto/AcessarDTO'
import bcrypt from 'bcrypt'
import usuarioRepository from '../../../repositories/implementations/core/authentication/UsuariosRepository'

class ValidatePasswordService {
  async execute(acessar: AcessarDTO): Promise<boolean> {
    const senha = await usuarioRepository.findByUsuario(acessar.usuario)
    if (!bcrypt.compareSync(acessar.senha, senha.senha)) {
      return false
    }
    return true
  }
}

export default new ValidatePasswordService()
