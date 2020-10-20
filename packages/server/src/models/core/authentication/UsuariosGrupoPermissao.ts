import { PrimaryGeneratedColumn, ManyToOne, Entity } from 'typeorm'
import { Usuarios } from './Usuarios'
import { GrupoPermissao } from './GrupoPermissao'

@Entity({ name: 'UsuariosGrupoPermissao', schema: 'Core' })
export class UsuariosGrupoPermissao {
  @PrimaryGeneratedColumn()
  id: number

  // Associations
  @ManyToOne((type) => Usuarios, (usuario) => usuario.id)
  usuario: Usuarios

  @ManyToOne((type) => GrupoPermissao, (permissao) => permissao.id)
  permissao: GrupoPermissao
}
