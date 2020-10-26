import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ITelas, Telas } from './Telas'
import { IPerfisAcesso, PerfisAcesso } from './PerfisAcesso'

export interface IPermissoes {
  id: number
  telas: ITelas
  perfisAcesso: IPerfisAcesso
  isMenu: boolean
  isAcesso: boolean
  isSalvar: boolean
  isEditar: boolean
  isDeletar: boolean
}

@Entity({ name: 'Permissoes', schema: 'Core' })
export class Permissoes implements IPermissoes {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne((type) => Telas, (telas) => telas.id)
  telas: Telas

  @ManyToOne((type) => PerfisAcesso, (perfisAcesso) => perfisAcesso.id)
  perfisAcesso: PerfisAcesso

  @Column({ default: false })
  isMenu: boolean

  @Column({ default: false })
  isAcesso: boolean

  @Column({ default: false })
  isSalvar: boolean

  @Column({ default: false })
  isEditar: boolean

  @Column({ default: false })
  isDeletar: boolean
}
