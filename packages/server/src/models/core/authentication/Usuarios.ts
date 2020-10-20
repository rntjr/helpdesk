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

export interface IUsuarios {
  id: number
  tipo: number
  email: string
  nome: string
  usuario: string
  senha: string
}

@Entity({ name: 'Usuarios', schema: 'Core' })
export class Usuarios implements IUsuarios {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  tipo: number

  @Column({ unique: true })
  email: string

  @Column({ nullable: true })
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

  @BeforeInsert()
  @BeforeUpdate()
  hashedPassword(): void {
    this.senha = bcrypt.hashSync(this.senha, 10)
  }
}
