import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Checklist } from './Checklist'

@Entity({ name: 'ChecklistItem', schema: 'HelpDesk' })
export class ChecklistItem {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne((type) => Checklist, (checkList) => checkList.id, {
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
