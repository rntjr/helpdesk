import { Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Endereco } from './Endereco'
import { Fisica } from './Fisica'
import { Juridica } from './Juridica'

@Entity({ name: 'Pessoa', schema: 'Common' })
export class Pessoa {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne((type) => Fisica, (fisica) => fisica.id)
  fisica: Fisica

  @OneToOne((type) => Juridica, (juridica) => juridica.id)
  juridica: Juridica

  @ManyToOne((type) => Endereco, (endereco) => endereco.id, { nullable: false })
  endereco: Endereco
}
