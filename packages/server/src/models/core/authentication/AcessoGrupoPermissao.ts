import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Telas } from '../apps/Telas'
import { GrupoPermissao } from './GrupoPermissao'

@Entity({ name: 'AcessoGrupoPermissao', schema: 'Core' })
export class AcessoGrupoPermissao {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne((type) => Telas, (telas) => telas.id)
  telas: Telas

  @ManyToOne((type) => GrupoPermissao, (grupoPermissao) => grupoPermissao.id)
  grupoPermissao: GrupoPermissao

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
