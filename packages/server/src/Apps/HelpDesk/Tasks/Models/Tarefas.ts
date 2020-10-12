import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Usuarios } from '../../../Core/Authentication/Models/Usuarios'
import { Etiquetas } from '../../Models/Etiqueta'
import { Atribuidos } from './Atribuidos'
import { Revisores } from './Revisores'

@Entity({ name: 'Tarefas', schema: 'HelpDesk' })
export class Tarefas {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne((type) => Usuarios, (autor) => autor.id)
  autor: Usuarios

  @Column({ default: Date.now() })
  abertura: Date

  @Column()
  classe: number

  @Column()
  tipo: number

  @Column()
  estado: number

  @Column()
  prioridade: number

  @Column()
  titulo: string

  @Column()
  descricao: string

  // @OneToMany((type) => Atribuidos, (atribuidos) => atribuidos.idTarefas)
  // atribuidos: Atribuidos[]

  @OneToMany((type) => Revisores, (revisores) => revisores.tarefas)
  revisores: Revisores[]

  @OneToMany((type) => Etiquetas, (etiquetas) => etiquetas.tarefas)
  etiquetas: Etiquetas[]
}
