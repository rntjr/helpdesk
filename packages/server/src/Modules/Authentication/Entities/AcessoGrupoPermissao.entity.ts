import { Field, ObjectType } from '@nestjs/graphql'
import { Telas } from 'src/Modules/Program/Entities/Telas.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import GrupoPermissao from './GrupoPermissao.entity'

@ObjectType()
@Entity()
export class AcessoGrupoPermissao {
  @Field({ nullable: true })
  @PrimaryGeneratedColumn()
  id: number

  @Field({ nullable: true })
  @ManyToOne((type) => Telas, (idTelas) => idTelas.id)
  idTelas: Telas

  @Field({ nullable: true })
  @ManyToOne(
    (type) => GrupoPermissao,
    (idGrupoPermissao) => idGrupoPermissao.id
  )
  idGrupoPermissao: GrupoPermissao

  @Field({ nullable: true, defaultValue: false })
  @Column({ nullable: true })
  isMenu: boolean

  @Field({ nullable: true, defaultValue: false })
  @Column({ nullable: true })
  isAcesso: boolean

  @Field({ nullable: true, defaultValue: false })
  @Column({ nullable: true })
  isSalvar: boolean

  @Field({ nullable: true, defaultValue: false })
  @Column({ nullable: true })
  isEditar: boolean

  @Field({ nullable: true, defaultValue: false })
  @Column({ nullable: true })
  isDeletar: boolean
}
