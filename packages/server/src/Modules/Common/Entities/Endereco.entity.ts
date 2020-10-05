import { Field, ObjectType } from '@nestjs/graphql'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@ObjectType()
export class Endereco {
  @PrimaryGeneratedColumn()
  @Field({ nullable: true })
  id: number

  @Column({ nullable: true })
  @Field({ nullable: true })
  cep: string

  @Column({ nullable: true })
  @Field({ nullable: true })
  rua: string

  @Column({ nullable: true })
  @Field({ nullable: true })
  bairro: string

  @Column({ nullable: true })
  @Field({ nullable: true })
  cidade: string

  @Column({ nullable: true })
  @Field({ nullable: true })
  estado: string
}
