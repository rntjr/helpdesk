import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Tarefas } from './Tarefas'

@Entity({ name: 'Etiquetas', schema: 'HelpDesk' })
export class Etiquetas {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne((type) => Tarefas, (tarefas) => tarefas.id)
  tarefas: Tarefas
}
