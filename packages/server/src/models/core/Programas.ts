import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ITelas, Telas } from './Telas'

export interface IProgramas {
  id: number
  nome: string
  telas: ITelas[]
}

@Entity({ name: 'Programas', schema: 'Core' })
export class Programas implements IProgramas {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nome: string

  @OneToMany((type) => Telas, (telas) => telas.id)
  telas: Telas[]
}
