import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Usuarios } from '../../../Core/Authentication/Models/Usuarios'
import { Tarefas } from './Tarefas'

@Entity({ name: 'Revisores', schema: 'HelpDesk' })
export class Revisores {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne((type) => Tarefas, (tarefas) => tarefas.id)
  tarefas: Tarefas

  @ManyToOne((type) => Usuarios, (usuario) => usuario.id)
  usuario: Usuarios
}
