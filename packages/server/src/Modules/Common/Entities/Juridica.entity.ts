import { Field, ObjectType } from '@nestjs/graphql'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@ObjectType()
export class Juridica {
  @PrimaryGeneratedColumn()
  @Field({ nullable: true })
  id: number

  @Column({ nullable: true })
  @Field({ nullable: true })
  nome: string

  @Column({ nullable: true })
  @Field({ nullable: true })
  cnpj: string

  @Column({ nullable: true })
  @Field({ nullable: true })
  fantasia: string
}
