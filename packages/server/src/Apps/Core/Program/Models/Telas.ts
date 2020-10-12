import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Programas } from './Programas'

@Entity({ name: 'Telas', schema: 'Core' })
export class Telas {
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
