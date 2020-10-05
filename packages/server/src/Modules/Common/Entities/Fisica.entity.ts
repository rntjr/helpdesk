import { Field, ObjectType } from '@nestjs/graphql'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@ObjectType()
export class Fisica {
  @PrimaryGeneratedColumn()
  @Field({ nullable: true })
  id: number

  @Column({ nullable: true })
  @Field({ nullable: true })
  nome: string

  @Column({ nullable: true })
  @Field({ nullable: true })
  cpf: string

  @Column({ nullable: true })
  @Field({ nullable: true })
  aniversario: Date

  @Field((type) => Fisica)
  @OneToMany((type) => Fisica, (mae) => mae.id)
  mae: Fisica
}
