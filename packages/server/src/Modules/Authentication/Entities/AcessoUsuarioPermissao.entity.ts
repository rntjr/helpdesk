import { Field, ObjectType } from '@nestjs/graphql'
import { Telas } from 'src/Modules/Program/Entities/Telas.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import Usuario from './Usuario.entity'

@ObjectType()
@Entity()
export class AcessoUsuarioPermissao {
  @Field({ nullable: true })
  @PrimaryGeneratedColumn()
  id: number

  @Field({ nullable: true })
  @ManyToOne((type) => Telas, (idTelas) => idTelas.id)
  idTelas: Telas

  @Field({ nullable: true })
  @ManyToOne((type) => Usuario, (idUsuario) => idUsuario.id)
  idUsuario: Usuario

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
