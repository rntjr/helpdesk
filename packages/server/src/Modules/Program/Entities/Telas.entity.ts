import { Field, ObjectType } from '@nestjs/graphql'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Programas } from './Programas.entity'

@Entity()
@ObjectType()
export class Telas {
  @Field({ nullable: true })
  @PrimaryGeneratedColumn()
  id: number

  @Field({ nullable: true })
  @Column()
  nome: string

  @Field({ nullable: true })
  @Column()
  tipo: number

  @Field({ nullable: true })
  @Column()
  rota: string

  @Field({ nullable: true })
  @ManyToOne((type) => Programas, (idProgramas) => idProgramas.id, {
    nullable: true
  })
  idProgramas: Programas
}
