import { IUsuarios } from '../../../models/core/authentication/Usuarios'
import { ICRUDRepository } from '../../ICRUDRepository'

export interface IUsuariosRepository extends ICRUDRepository {
  findByUsuario(usuario: string): Promise<IUsuarios>
  findByEmail(email: string): Promise<IUsuarios>
  create(data: IUsuarios): Promise<IUsuarios>
}
