import { PrimaryGeneratedColumn, ManyToOne, Entity } from 'typeorm'
import { IUsuarios, Usuarios } from './Usuarios'
import { IPerfisAcesso, PerfisAcesso } from './PerfisAcesso'

export interface IUsuariosPerfisAcesso {
  usuario: IUsuarios
  perfil: IPerfisAcesso
}

@Entity({ name: 'UsuariosPerfisAcesso', schema: 'Core' })
export class UsuariosPerfisAcesso implements IUsuariosPerfisAcesso {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne((type) => Usuarios, (usuario) => usuario.id)
  usuario: Usuarios

  @ManyToOne((type) => PerfisAcesso, (perfilAcesso) => perfilAcesso.id)
  perfil: PerfisAcesso
}
