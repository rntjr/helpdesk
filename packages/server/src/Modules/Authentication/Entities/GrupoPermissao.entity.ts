import { Field, ObjectType } from '@nestjs/graphql'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import Usuario from './Usuario.entity'
import UsuarioGrupoPermissao from './UsuarioGrupoPermissao.entity'

@ObjectType()
@Entity()
export default class GrupoPermissao {
  @Field({ nullable: true })
  @PrimaryGeneratedColumn()
  id: number

  @Field({ nullable: true })
  @Column({ nullable: true })
  nome: string

  // Associations
  @Field((type) => [Usuario])
  @ManyToOne(
    (type) => UsuarioGrupoPermissao,
    (usuarioGrupoPermissao) => usuarioGrupoPermissao.idPermissao
  )
  usuarioGrupoPermissao: UsuarioGrupoPermissao[]
}
