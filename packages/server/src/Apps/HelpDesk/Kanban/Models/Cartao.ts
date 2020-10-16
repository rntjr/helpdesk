import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Tarefas } from '../../Tasks/Models/Tarefas'
import { ColunaQuadro } from './ColunaQuadro'

@Entity({ schema: 'HelpDesk', name: 'Cartao' })
export class Cartao {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne((type) => ColunaQuadro, (colunaQuadro) => colunaQuadro.id)
  colunaQuadro: ColunaQuadro

  @ManyToOne((type) => Tarefas, (tarefas) => tarefas.id)
  tarefas: Tarefas

  @Column()
  sequencia: number

  @Column({ nullable: false })
  titulo: string

  @Column()
  descricao: string
}
