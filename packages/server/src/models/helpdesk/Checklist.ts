import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { ChecklistItem } from './ChecklistItem'
import { Tarefas } from './Tarefas'

@Entity({ name: 'Checklist', schema: 'HelpDesk' })
export class Checklist {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne((type) => Tarefas, (tarefas) => tarefas.id)
  tarefas: Tarefas

  @Column()
  titulo: string

  @Column({ nullable: true })
  descricao: string

  @OneToMany(
    (type) => ChecklistItem,
    (checkListItens) => checkListItens.checkList
  )
  checkListItens: ChecklistItem[]
}
