import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { IProgramas, Programas } from './Programas'

export interface ITelas {
  id: number
  nome: string
  tipo: number
  rota: string
  programa: IProgramas
}

@Entity({ name: 'Telas', schema: 'Core' })
export class Telas implements ITelas {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nome: string

  @Column()
  tipo: number

  @Column()
  rota: string

  @ManyToOne((type) => Programas, (programas) => programas.id)
  programa: Programas
}
