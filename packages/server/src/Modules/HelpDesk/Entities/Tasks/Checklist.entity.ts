import { Field, ObjectType } from '@nestjs/graphql'
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { ChecklistItem } from './ChecklistItem.entity'
import { Tarefas } from './Tarefas.entity'

Entity()
ObjectType()
export class Checklist {
  @PrimaryGeneratedColumn()
  @Field({ nullable: true })
  id: number

  @ManyToOne((type) => Tarefas, (idTarefa) => idTarefa.id)
  idTarefa: Tarefas

  @Field({ nullable: true })
  @Column({ nullable: true })
  titulo: string

  @Field()
  @Column()
  descricao: string

  @Field((type) => [ChecklistItem])
  @OneToMany((type) => ChecklistItem, (checkListItens) => checkListItens.id)
  checkListItens: ChecklistItem[]
}
