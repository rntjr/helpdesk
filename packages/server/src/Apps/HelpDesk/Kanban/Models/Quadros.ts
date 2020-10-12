import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Quadros {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nome: string

  @Column()
  descricao: string
}
