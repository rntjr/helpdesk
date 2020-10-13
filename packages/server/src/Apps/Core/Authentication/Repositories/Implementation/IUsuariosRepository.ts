import { ICRUDRepository } from '../../../Repositories/ICRUDRepository'
import { Usuarios } from '../../Models/Usuarios'
import { getRepository, DeleteResult, UpdateResult } from 'typeorm'

export class IUsuariosRepository implements ICRUDRepository {
  async create<Usuarios>(data: Usuarios): Promise<Usuarios> {
    const repo = getRepository(Usuarios)
    return await repo.save(data)
  }

  async update<Usuarios>(id: number, data: Usuarios): Promise<UpdateResult> {
    const repo = getRepository(Usuarios)
    return await repo.update(id, data)
  }

  async delete(id: number): Promise<DeleteResult> {
    const repo = getRepository(Usuarios)
    return await repo.delete(id)
  }
}
