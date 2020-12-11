import { IPerfisAcesso } from '../../models/core/PerfisAcesso'
import { IUsuarios } from '../../models/core/Usuarios'
import { IUsuariosPerfisAcesso } from '../../models/core/UsuariosPerfisAcesso'

export class UsuarioPerfilAcessoDTO implements IUsuariosPerfisAcesso {
  id?: number
  perfil?: IPerfisAcesso
  usuario?: IUsuarios
}
