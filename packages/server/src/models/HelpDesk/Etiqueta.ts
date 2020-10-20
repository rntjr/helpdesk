import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Tarefas } from '../Tasks/Models/Tarefas'

@Entity({ name: 'Etiquetas', schema: 'HelpDesk' })
export class Etiquetas {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne((type) => Tarefas, (tarefas) => tarefas.id)
  tarefas: Tarefas
}
