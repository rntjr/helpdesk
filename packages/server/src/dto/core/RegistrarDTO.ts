import { IUsuarios } from '../../models/core/Usuarios'
import { IUsuariosPerfisAcesso } from '../../models/core/UsuariosPerfisAcesso'

export class RegistrarDTO implements IUsuarios {
  id: number
  tipo: number
  email: string
  nome: string
  usuario: string
  senha: string
  usuarioPerfisAcesso: IUsuariosPerfisAcesso[]
}
