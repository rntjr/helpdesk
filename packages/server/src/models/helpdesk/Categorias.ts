import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'Categorias', schema: 'HelpDesk' })
export class Categorias {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  tipo: number

  @Column()
  nome: string

  @Column()
  descricao: string
}
