import { Field, ObjectType } from '@nestjs/graphql'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Checklist } from './Checklist.entity'

Entity()
ObjectType()
export class ChecklistItem {
  @PrimaryGeneratedColumn()
  @Field({ nullable: true })
  id: number

  @ManyToOne((type) => Checklist, (idChecklist) => idChecklist.id)
  idChecklist: Checklist

  @Field({ nullable: true })
  @Column({ nullable: true })
  nome: string

  @Field()
  @Column()
  descricao: string

  @Column({ default: false, nullable: true })
  @Field({ nullable: true })
  isFechado: boolean
}
