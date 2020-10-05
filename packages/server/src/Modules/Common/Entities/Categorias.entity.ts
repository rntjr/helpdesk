import { Field, ObjectType } from '@nestjs/graphql'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@ObjectType()
export class Categorias {
  @PrimaryGeneratedColumn()
  @Field({ nullable: true })
  id: number

  @Field({ nullable: true })
  @Column({ nullable: true })
  tipo: number

  @Field({ nullable: true })
  @Column({ nullable: true })
  nome: string

  @Field()
  @Column()
  descricao: string
}
