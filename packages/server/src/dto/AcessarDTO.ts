import { Usuarios } from '../models/core/authentication/Usuarios'

export class AcessarDTO extends Usuarios {
  usuario: string
  senha: string
}
