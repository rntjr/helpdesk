import { getRepository } from 'typeorm'
import { IUsuarios, Usuarios } from '../../models/core/Usuarios'
import { ICRUDRepository } from '../ICRUDRepository'

export interface IUsuariosRepository extends ICRUDRepository {
  findByUsuario(usuario: string): Promise<IUsuarios>
  findByEmail(email: string): Promise<IUsuarios>
  create(data: IUsuarios): Promise<IUsuarios>
  update(id: number, data: IUsuarios): Promise<IUsuarios>
  delete(id: number): Promise<boolean>
}

export class UsuariosRepository implements IUsuariosRepository {
  async findByEmail(email: string): Promise<Usuarios> {
    const repo = getRepository(Usuarios)
    return await repo.findOne({ where: { email } })
  }

  async findByUsuario(usuario: string): Promise<Usuarios> {
    const repo = getRepository(Usuarios)
    return await repo.findOne({ where: { usuario } })
  }

  async create(data: Usuarios): Promise<Usuarios> {
    const repo = getRepository(Usuarios)
    const usuario = repo.create(data)
    const create = await repo.save(usuario)
    return create
  }

  async update(id: number, data: Usuarios): Promise<Usuarios> {
    const repo = getRepository(Usuarios)
    const usuario = repo.create(data)
    if ((await repo.update(id, usuario)).affected < 1) {
      return null
    }
    return await repo.findOne(id)
  }

  async delete(id: number): Promise<boolean> {
    const repo = getRepository(Usuarios)
    if ((await repo.delete(id)).affected < 1) {
      return false
    }
    return true
  }
}
