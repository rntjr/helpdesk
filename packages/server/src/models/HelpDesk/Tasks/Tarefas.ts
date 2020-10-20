import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Usuarios } from '../../core/authentication/Usuarios'
import { Etiquetas } from '../Etiqueta'
import { Atribuidos } from './Atribuidos'
import { Checklist } from './Checklist'
import { Revisores } from './Revisores'
import { Status } from './Status'

@Entity({ name: 'Tarefas', schema: 'HelpDesk' })
export class Tarefas {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne((type) => Usuarios, (autor) => autor.id)
  autor: Usuarios

  @CreateDateColumn()
  @Column()
  abertura: Date

  /*
   * Campo responsavel por identificar se a tarefa é um Chamado, Mudança (Pull Request) ou Problema(Issue).
   */
  @Column({ nullable: false })
  classe: number

  /*
   * Campo responsavel por identificar se a tarefa é uma requisição ou incidente.
   */
  @Column({ nullable: false })
  tipo: number

  @ManyToOne((type) => Status, (status) => status.id)
  status: Status

  @Column({ nullable: false })
  prioridade: number

  @Column({ nullable: false })
  titulo: string

  @Column({ nullable: false })
  descricao: string

  @OneToMany((type) => Atribuidos, (atribuidos) => atribuidos.tarefas)
  atribuidos: Atribuidos[]

  @OneToMany((type) => Revisores, (revisores) => revisores.tarefas)
  revisores: Revisores[]

  @OneToMany((type) => Etiquetas, (etiquetas) => etiquetas.tarefas)
  etiquetas: Etiquetas[]

  @OneToMany((type) => Checklist, (checkList) => checkList.tarefas)
  checkList: Checklist[]
}
