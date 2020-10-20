import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Endereco } from './Endereco'

@Entity({ name: 'Pessoa', schema: 'Common' })
export class Pessoa {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nome: string

  @Column({ nullable: true })
  fantasia: string

  @Column({ unique: true })
  cgc: string

  @Column({ nullable: true })
  aniversario: Date

  @ManyToOne((type) => Endereco, (endereco) => endereco.id)
  endereco: Endereco

  @BeforeInsert()
  @BeforeUpdate()
  tratarCGC(): void {
    this.cgc = this.cgc.toString().trim()
  }
}
