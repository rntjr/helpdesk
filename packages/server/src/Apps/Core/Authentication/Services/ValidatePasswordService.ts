import { AcessarDTO } from '../DTO/AcessarDTO'
import bcrypt from 'bcrypt'
import usuarioRepository from '../Repositories/Implementation/IUsuariosRepository'
class ValidatePasswordService {
  async execute(acessar: AcessarDTO): Promise<boolean> {
    if (!acessar) return false
    const senha = await usuarioRepository.findByUsuario(acessar.usuario)
    if (!bcrypt.compareSync(acessar.senha, senha.senha)) {
      return false
    }
    return true
  }
}

export default new ValidatePasswordService()
