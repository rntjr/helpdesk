import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { IPermissoes, Permissoes } from './Permissoes'

export interface IPerfisAcesso {
  id: number
  nome: string
  permissoes: IPermissoes[]
}

@Entity({ name: 'PerfisAcesso', schema: 'Core' })
export class PerfisAcesso implements IPerfisAcesso {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nome: string

  @OneToMany((type) => Permissoes, (permissoes) => permissoes.perfisAcesso)
  permissoes: Permissoes[]
}
