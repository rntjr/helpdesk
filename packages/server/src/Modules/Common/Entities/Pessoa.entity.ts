import { Field, ObjectType } from '@nestjs/graphql'
import { Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Endereco } from './Endereco.entity'
import { Fisica } from './Fisica.entity'
import { Juridica } from './Juridica.entity'

@ObjectType()
@Entity()
export class Pessoa {
  @PrimaryGeneratedColumn()
  @Field({ nullable: true })
  id: number

  @OneToOne((type) => Fisica, (idFisica) => idFisica.id)
  @Field((type) => Fisica)
  idFisica: Fisica

  @OneToOne((type) => Juridica, (idJuridica) => idJuridica.id)
  @Field((type) => Juridica)
  idJuridica: Juridica

  @ManyToOne((type) => Endereco, (idEndereco) => idEndereco.id)
  @Field((type) => Endereco)
  idEndereco: Endereco
}
