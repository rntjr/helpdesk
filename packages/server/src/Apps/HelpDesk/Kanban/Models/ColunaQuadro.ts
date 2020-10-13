import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Cartao } from './Cartao'
import { Quadros } from './Quadros'

@Entity()
export class ColunaQuadro {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne((type) => Quadros, (quadros) => quadros.id, { nullable: false })
  quadros: Quadros

  @Column({ nullable: false })
  nome: string

  @Column()
  descricao: string

  @OneToMany((type) => Cartao, (cartoes) => cartoes.colunaQuadro)
  cartoes: Cartao[]
}
