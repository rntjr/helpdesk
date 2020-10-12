import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'Fisica', schema: 'Common' })
export class Fisica {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nome: string

  @Column()
  cpf: string

  @Column()
  aniversario: Date

  @OneToMany((type) => Fisica, (idMae) => idMae.id)
  idMae: Fisica
}
