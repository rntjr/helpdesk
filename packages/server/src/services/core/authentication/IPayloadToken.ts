import { AcessoGrupoPermissao } from '../../../models/core/authentication/AcessoGrupoPermissao'
import { IUsuarios } from '../../../models/core/authentication/Usuarios'

export interface IPayloadToken {
  usuario?: IUsuarios
  permissao?: AcessoGrupoPermissao
  iat?: number
  exp?: number
}
