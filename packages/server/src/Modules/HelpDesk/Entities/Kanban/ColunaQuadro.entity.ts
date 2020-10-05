import { Field, ObjectType } from '@nestjs/graphql'
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { CartaoColuna } from './CartaoColuna.entity'
import { Quadros } from './Quadros.entity'

Entity()
ObjectType()
export class ColunaQuadro {
  @PrimaryGeneratedColumn()
  @Field({ nullable: true })
  id: number

  @ManyToOne((type) => Quadros, (idQuadro) => idQuadro.id)
  idQuadro: Quadros

  @Field({ nullable: true })
  @Column({ nullable: true })
  nome: string

  @Field()
  @Column()
  descricao: string

  @OneToMany((type) => CartaoColuna, (cartoes) => cartoes.id)
  cartoes: CartaoColuna[]
}
