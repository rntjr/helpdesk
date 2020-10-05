import { Field, ObjectType } from '@nestjs/graphql'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import UsuarioGrupoPermissao from './UsuarioGrupoPermissao.entity'

@ObjectType()
@Entity()
export default class Usuario {
  @Field({ nullable: true })
  @PrimaryGeneratedColumn()
  id: number

  @Field({ nullable: true })
  @Column({ unique: true })
  email: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  nome: string

  @Field({ nullable: true })
  @Column({ unique: true, nullable: true })
  usuario: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  senha: string

  @Field((type) => [UsuarioGrupoPermissao])
  @OneToMany(
    (type) => UsuarioGrupoPermissao,
    (usuarioGrupoPermissao) => usuarioGrupoPermissao.idUsuario
  )
  usuarioGrupoPermissao: UsuarioGrupoPermissao[]

  // Associations
}
