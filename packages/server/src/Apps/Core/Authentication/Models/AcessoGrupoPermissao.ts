import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Telas } from '../../Program/Models/Telas'
import { GrupoPermissao } from './GrupoPermissao'

@Entity({ name: 'AcessoGrupoPermissao', schema: 'Core' })
export class AcessoGrupoPermissao {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne((type) => Telas, (telas) => telas.id)
  telas: Telas

  @ManyToOne((type) => GrupoPermissao, (grupoPermissao) => grupoPermissao.id)
  grupoPermissao: GrupoPermissao

  @Column()
  isMenu: boolean

  @Column()
  isAcesso: boolean

  @Column()
  isSalvar: boolean

  @Column()
  isEditar: boolean

  @Column()
  isDeletar: boolean
}
