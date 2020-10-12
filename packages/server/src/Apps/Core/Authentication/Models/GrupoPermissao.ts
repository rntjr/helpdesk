import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { UsuariosGrupoPermissao } from './UsuariosGrupoPermissao'

@Entity({ name: 'GrupoPermissao', schema: 'Core' })
export class GrupoPermissao {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nome: string

  @OneToMany(
    (type) => UsuariosGrupoPermissao,
    (usuariosGrupoPermissao) => usuariosGrupoPermissao.permissao
  )
  usuarioGrupoPermissao: UsuariosGrupoPermissao[]
}
