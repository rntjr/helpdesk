import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { UsuariosGrupoPermissao } from './UsuariosGrupoPermissao'
import bcrypt from 'bcrypt'

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

  @Column({ nullable: false })
  senha: string

  @OneToMany(
    (type) => UsuariosGrupoPermissao,
    (usuariosGrupoPermissao) => usuariosGrupoPermissao.usuario
  )
  usuarioGrupoPermissao: UsuariosGrupoPermissao[]

  @BeforeInsert()
  @BeforeUpdate()
  hashedPassword(): void {
    this.senha = bcrypt.hashSync(this.senha, 10)
  }
}

export type UsuariosInterface = Usuarios
