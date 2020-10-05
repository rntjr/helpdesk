import { Field, ObjectType } from '@nestjs/graphql'
import { Categorias } from 'src/Modules/Common/Entities/Categorias.entity'
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Tarefas } from './Tarefas.entity'

Entity()
ObjectType()
export class Etiquetas {
  @PrimaryGeneratedColumn()
  @Field({ nullable: true })
  id: number

  @Field((type) => Tarefas)
  @ManyToOne((type) => Tarefas, (idTarefas) => idTarefas.id)
  idTarefas: Tarefas

  @Field((type) => Categorias)
  @ManyToOne((type) => Categorias, (idCategorias) => idCategorias.id)
  idCategorias: Categorias
}
