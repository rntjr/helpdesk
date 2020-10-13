import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'Juridica', schema: 'Common' })
export class Juridica {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nome: string

  @Column({ unique: true })
  cnpj: string

  @Column()
  fantasia: string
}
