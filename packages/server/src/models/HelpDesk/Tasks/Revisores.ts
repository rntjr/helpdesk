import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Usuarios } from '../../core/authentication/Usuarios'
import { Tarefas } from './Tarefas'

@Entity({ name: 'Revisores', schema: 'HelpDesk' })
export class Revisores {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne((type) => Tarefas, (tarefas) => tarefas.id, { nullable: false })
  tarefas: Tarefas

  @ManyToOne((type) => Usuarios, (usuario) => usuario.id, { nullable: false })
  usuario: Usuarios
}
