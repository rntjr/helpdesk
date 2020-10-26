import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ColunaQuadro } from './ColunaQuadro'

@Entity({ schema: 'HelpDesk', name: 'Quadros' })
export class Quadros {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nome: string

  @Column({ nullable: true })
  descricao: string

  @OneToMany((type) => ColunaQuadro, (colunas) => colunas.quadros)
  colunas: ColunaQuadro[]
}
