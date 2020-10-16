import { Usuarios } from '../Models/Usuarios'

export class RegistrarDTO extends Usuarios {
  nome: string
  email: string
  senha: string
  usuario: string
}
