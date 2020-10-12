import { Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Endereco } from './Endereco'
import { Fisica } from './Fisica'
import { Juridica } from './Juridica'

@Entity({ name: 'Pessoa', schema: 'Common' })
export class Pessoa {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne((type) => Fisica, (idFisica) => idFisica.id)
  idFisica: Fisica

  @OneToOne((type) => Juridica, (idJuridica) => idJuridica.id)
  idJuridica: Juridica

  @ManyToOne((type) => Endereco, (idEndereco) => idEndereco.id)
  idEndereco: Endereco
}
