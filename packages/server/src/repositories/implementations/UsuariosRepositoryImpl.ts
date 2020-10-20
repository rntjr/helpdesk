import { getRepository, DeleteResult, UpdateResult } from 'typeorm'
import { Usuarios } from '../../models/core/authentication/Usuarios'
import { IUsuariosRepository } from '../core/authentication/IUsuariosRepository'

export class UsuariosRepositoryImpl implements IUsuariosRepository {
  async findByEmail(email: string): Promise<Usuarios> {
    const repo = getRepository(Usuarios)
    const reg = await repo.findOne({ where: { email } })
    if (reg === undefined) {
      return null
    }
    return reg
  }

  async findByUsuario(usuario: string): Promise<Usuarios> {
    const repo = getRepository(Usuarios)
    const reg = await repo.findOne({ where: { usuario } })
    if (reg === undefined) {
      return null
    }
    return reg
  }

  public async create(data: Usuarios): Promise<Usuarios> {
    const repo = getRepository(Usuarios)
    const usuario = repo.create(data)
    return await repo.save(usuario)
  }

  async update(id: number, data: Usuarios): Promise<UpdateResult> {
    const repo = getRepository(Usuarios)
    if (!(await repo.findOne({ where: { id } }))) {
      return null
    }
    const usuario = repo.create(data)
    return await repo.update(id, usuario)
  }

  async delete(id: number): Promise<DeleteResult> {
    const repo = getRepository(Usuarios)
    return await repo.delete(id)
  }
}
