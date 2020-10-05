import { Field, ObjectType } from '@nestjs/graphql'
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Tarefas } from './Tarefas.entity'

Entity()
ObjectType()
export class TarefasRelacionadas {
  @PrimaryGeneratedColumn()
  @Field({ nullable: true })
  id: number

  @Field((type) => Tarefas)
  @ManyToOne((type) => Tarefas, (idTarefaPai) => idTarefaPai.id)
  idTarefaPai: Tarefas

  @Field((type) => Tarefas)
  @ManyToOne((type) => Tarefas, (idTarefaFilho) => idTarefaFilho.id)
  idTarefaFilho: Tarefas
}
