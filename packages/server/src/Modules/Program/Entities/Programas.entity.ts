import { Field, ObjectType } from '@nestjs/graphql'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Telas } from './Telas.entity'

@Entity()
@ObjectType()
export class Programas {
  @Field({ nullable: true })
  @PrimaryGeneratedColumn()
  id: number

  @Field({ nullable: true })
  @Column()
  nome: string

  @Field((type) => [Telas])
  telas: Telas[]
}
