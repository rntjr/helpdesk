import { Field, ObjectType } from '@nestjs/graphql'
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import GrupoPermissao from './GrupoPermissao.entity'
import Usuario from './Usuario.entity'

@ObjectType()
@Entity()
export default class UsuarioGrupoPermissao {
  @Field({ nullable: true })
  @PrimaryGeneratedColumn()
  id: number

  // Associations
  @ManyToOne((type) => Usuario, (idUsuario) => idUsuario.id)
  idUsuario: Usuario

  @OneToMany((type) => GrupoPermissao, (idPermissao) => idPermissao.id)
  idPermissao: GrupoPermissao
}
