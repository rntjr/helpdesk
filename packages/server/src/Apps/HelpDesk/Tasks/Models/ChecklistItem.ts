import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Checklist } from './Checklist'

@Entity({ name: 'ChecklistItem', schema: 'HelpDesk' })
export class ChecklistItem {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne((type) => Checklist, (idChecklist) => idChecklist.id, {
    nullable: false
  })
  checkList: Checklist

  @Column({ nullable: false })
  nome: string

  @Column()
  descricao: string

  @Column({ default: false })
  isFechado: boolean
}
