import { Field, ObjectType } from '@nestjs/graphql'
import Usuario from 'src/Modules/Authentication/Entities/Usuario.entity'
import { Categorias } from 'src/Modules/Common/Entities/Categorias.entity'
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Atribuidos } from './Atribuidos.entity'
import { Revisores } from './Revisores.entity'

@Entity()
@ObjectType()
export class Tarefas {
  @PrimaryGeneratedColumn()
  @Field({ nullable: true })
  id: number

  @Field((type) => Usuario)
  @ManyToOne((type) => Usuario, (autor) => autor.id)
  autor: Usuario

  @Column({ default: Date.now(), nullable: true })
  @Field({ nullable: true })
  abertura: Date

  @Column({ nullable: true })
  @Field({ nullable: true })
  classe: number

  @Column()
  @Field()
  tipo: number

  @Column()
  @Field()
  estado: number

  @Column()
  @Field()
  prioridade: number

  @Column({ nullable: true })
  @Field({ nullable: true })
  titulo: string

  @Column()
  @Field()
  descricao: string

  @Field((type) => Atribuidos)
  @OneToMany((type) => Atribuidos, (atribuidos) => atribuidos.id)
  atribuidos: Atribuidos[]

  @OneToMany((type) => Revisores, (revisores) => revisores.id)
  revisores: Revisores[]

  @OneToMany((type) => Categorias, (categorias) => categorias.id)
  categorias: Categorias[]
}
