import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Status {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  nome: string

  /*
   * Campo responsavel por identificar se o status é: A Fazer, Em Progresso, Paralizado, Terminado.
   */
  @Column({ nullable: false })
  tipo: number
}
