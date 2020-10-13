import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Telas } from '../../Program/Models/Telas'
import { GrupoPermissao } from './GrupoPermissao'

@Entity({ name: 'AcessoGrupoPermissao', schema: 'Core' })
export class AcessoGrupoPermissao {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne((type) => Telas, (telas) => telas.id, { nullable: false })
  telas: Telas

  @ManyToOne((type) => GrupoPermissao, (grupoPermissao) => grupoPermissao.id, {
    nullable: false
  })
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
