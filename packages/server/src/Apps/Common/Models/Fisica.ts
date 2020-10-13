import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'Fisica', schema: 'Common' })
export class Fisica {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  nome: string

  @Column({ unique: true })
  cpf: string

  @Column({ nullable: false })
  aniversario: Date

  @OneToMany((type) => Fisica, (idMae) => idMae.id, { nullable: false })
  idMae: Fisica
}
