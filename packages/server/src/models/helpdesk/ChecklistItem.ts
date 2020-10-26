import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Checklist } from './Checklist'

@Entity({ name: 'ChecklistItem', schema: 'HelpDesk' })
export class ChecklistItem {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne((type) => Checklist, (checkList) => checkList.id)
  checkList: Checklist

  @Column()
  nome: string

  @Column({ nullable: true })
  descricao: string

  @Column({ default: false })
  isFechado: boolean
}
