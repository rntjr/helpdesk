import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Tarefas } from './Tarefas'

Entity({ name: 'TarefasRelacionadas', schema: 'HelpDesk' })
export class TarefasRelacionadas {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne((type) => Tarefas, (tarefaPai) => tarefaPai.id)
  tarefaPai: Tarefas

  @ManyToOne((type) => Tarefas, (tarefaFilho) => tarefaFilho.id)
  tarefaFilho: Tarefas
}
