import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
@Entity('Usuarios')
export class Usuarios {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  email: string

  @Column({ nullable: true })
  nome: string

  @Column({ unique: true, nullable: true })
  usuario: string

  @Column({ nullable: true })
  senha: string
}
