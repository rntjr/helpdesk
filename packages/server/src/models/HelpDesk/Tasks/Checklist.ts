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

  @ManyToOne((type) => Tarefas, (tarefas) => tarefas.id, { nullable: false })
  tarefas: Tarefas

  @Column({ nullable: false })
  titulo: string

  @Column()
  descricao: string

  @OneToMany(
    (type) => ChecklistItem,
    (checkListItens) => checkListItens.checkList
  )
  checkListItens: ChecklistItem[]
}
