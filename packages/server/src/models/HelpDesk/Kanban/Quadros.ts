import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ColunaQuadro } from './ColunaQuadro'

@Entity({ schema: 'HelpDesk', name: 'Quadros' })
export class Quadros {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  nome: string

  @Column()
  descricao: string

  @OneToMany((type) => ColunaQuadro, (colunas) => colunas.quadros)
  colunas: ColunaQuadro[]
}
