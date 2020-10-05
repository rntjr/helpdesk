import { Field, ObjectType } from '@nestjs/graphql'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Tarefas } from '../Tasks/Tarefas.entity'
import { ColunaQuadro } from './ColunaQuadro.entity'

Entity()
ObjectType()
export class CartaoColuna {
  @PrimaryGeneratedColumn()
  @Field({ nullable: true })
  id: number

  @ManyToOne((type) => ColunaQuadro, (idColunaQuadro) => idColunaQuadro.id)
  idColunaQuadro: ColunaQuadro

  @ManyToOne((type) => Tarefas, (idTarefas) => idTarefas.id)
  idTarefas: Tarefas

  @Field({ nullable: true })
  @Column({ nullable: true })
  sequencia: number

  @Field({ nullable: true })
  @Column({ nullable: true })
  titulo: string

  @Field()
  @Column()
  descricao: string
}
