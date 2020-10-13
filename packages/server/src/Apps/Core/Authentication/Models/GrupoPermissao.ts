import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { AcessoGrupoPermissao } from './AcessoGrupoPermissao'

@Entity({ name: 'GrupoPermissao', schema: 'Core' })
export class GrupoPermissao {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  nome: string

  @OneToMany(
    (type) => AcessoGrupoPermissao,
    (acessoGrupoPermissao) => acessoGrupoPermissao.grupoPermissao
  )
  acessoGrupoPermissao: AcessoGrupoPermissao[]
}
