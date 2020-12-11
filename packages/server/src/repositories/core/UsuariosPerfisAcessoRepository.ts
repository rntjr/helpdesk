import { getRepository } from 'typeorm'
import {
  IUsuariosPerfisAcesso,
  UsuariosPerfisAcesso
} from '../../models/core/UsuariosPerfisAcesso'
import { ICRUDRepository } from '../ICRUDRepository'

export interface IUsuariosPerfisAcessoRepository extends ICRUDRepository {
  findPerfisByUsuarioId(id: number): Promise<IUsuariosPerfisAcesso[]>
  create(data: IUsuariosPerfisAcesso): Promise<IUsuariosPerfisAcesso>
  update(
    id: number,
    data: IUsuariosPerfisAcesso
  ): Promise<IUsuariosPerfisAcesso>
  delete(id: number): Promise<boolean>
}

export class UsuariosPerfisAcessoRepository
  implements IUsuariosPerfisAcessoRepository {
  async findPerfisByUsuarioId(id: number): Promise<IUsuariosPerfisAcesso[]> {
    const repo = getRepository(UsuariosPerfisAcesso)
    return await repo.find({
      where: {
        usuario: id
      }
    })
  }

  async create(data: UsuariosPerfisAcesso): Promise<UsuariosPerfisAcesso> {
    const repo = getRepository(UsuariosPerfisAcesso)
    const usuariosPerfisAcesso = repo.create(data)
    const create = await repo.save(usuariosPerfisAcesso)
    return create
  }

  async update(
    id: number,
    data: IUsuariosPerfisAcesso
  ): Promise<IUsuariosPerfisAcesso> {
    const repo = getRepository(UsuariosPerfisAcesso)
    const usuariosPerfisAcesso = repo.create(data)
    if ((await repo.update(id, usuariosPerfisAcesso)).affected < 1) {
      return null
    }
    return await repo.findOne(id)
  }

  async delete(id: number): Promise<boolean> {
    const repo = getRepository(UsuariosPerfisAcesso)
    if ((await repo.delete(id)).affected < 1) {
      return false
    }
    return true
  }
}
