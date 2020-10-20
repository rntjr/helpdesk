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

  @Column()
  fantasia: string

  @Column({ unique: true })
  cgc: string

  @Column({ nullable: false })
  aniversario: Date

  @ManyToOne((type) => Endereco, (endereco) => endereco.id, { nullable: false })
  endereco: Endereco

  @BeforeInsert()
  @BeforeUpdate()
  tratarCGC(): void {
    this.cgc = this.cgc.toString().trim()
  }
}
