import { Field, ObjectType } from '@nestjs/graphql'
import Usuario from 'src/Modules/Authentication/Entities/Usuario.entity'
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Tarefas } from './Tarefas.entity'

Entity()
ObjectType()
export class Atribuidos {
  @PrimaryGeneratedColumn()
  @Field({ nullable: true })
  id: number

  @ManyToOne((type) => Tarefas, (idTarefa) => idTarefa.id)
  idTarefa: Tarefas

  @ManyToOne((type) => Usuario, (idUsuario) => idUsuario.id)
  idUsuario: Usuario
}
