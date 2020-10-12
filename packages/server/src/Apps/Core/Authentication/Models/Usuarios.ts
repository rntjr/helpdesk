import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { UsuariosGrupoPermissao } from './UsuariosGrupoPermissao'

@Entity({ name: 'Usuarios', schema: 'Core' })
export class Usuarios {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  email: string

  @Column()
  nome: string

  @Column({ unique: true })
  usuario: string

  @Column()
  senha: string

  @OneToMany(
    (type) => UsuariosGrupoPermissao,
    (usuariosGrupoPermissao) => usuariosGrupoPermissao.usuario
  )
  usuarioGrupoPermissao: UsuariosGrupoPermissao[]
}
