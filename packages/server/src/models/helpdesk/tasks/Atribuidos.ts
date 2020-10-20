import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Usuarios } from '../../core/authentication/Usuarios'
import { Tarefas } from './Tarefas'

@Entity({ name: 'Atribuidos', schema: 'HelpDesk' })
export class Atribuidos {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne((type) => Tarefas, (tarefas) => tarefas.id)
  tarefas: Tarefas

  @ManyToOne((type) => Usuarios, (usuario) => usuario.id)
  usuario: Usuarios
}
