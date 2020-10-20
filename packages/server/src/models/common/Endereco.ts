import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'Endereco', schema: 'Common' })
export class Endereco {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  cep: string

  @Column({ nullable: false })
  rua: string

  @Column({ nullable: false })
  bairro: string

  @Column({ nullable: false })
  cidade: string

  @Column({ nullable: false })
  estado: string
}
