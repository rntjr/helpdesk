import { Usuarios } from '../models/core/authentication/Usuarios'

export class RegistrarDTO extends Usuarios {
  nome: string
  email: string
  senha: string
  usuario: string
}
