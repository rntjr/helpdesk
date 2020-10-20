import { IUsuarios } from '../../../models/core/authentication/Usuarios'

export class AcessarDTO implements IUsuarios {
  id: number
  tipo: number
  email: string
  nome: string
  usuario: string
  senha: string
}
