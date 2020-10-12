import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'Endereco', schema: 'Common' })
export class Endereco {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  cep: string

  @Column()
  rua: string

  @Column()
  bairro: string

  @Column()
  cidade: string

  @Column()
  estado: string
}
