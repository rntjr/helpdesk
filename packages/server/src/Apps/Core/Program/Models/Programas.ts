import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Telas } from './Telas'

@Entity({ name: 'Programas', schema: 'Core' })
export class Programas {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nome: string

  @OneToMany((type) => Telas, (telas) => telas.id)
  telas: Telas[]
}
