import { ICRUDRepository } from '../../../Repositories/ICRUDRepository'
import { Usuarios } from '../../Models/Usuarios'
import { getRepository, DeleteResult, UpdateResult } from 'typeorm'

class IUsuariosRepository implements ICRUDRepository {
  async findByUsuario(usuario: string): Promise<Usuarios> {
    const repo = getRepository(Usuarios)
    return await repo.findOne({ where: { usuario } })
  }

  public async create(data: Usuarios): Promise<Usuarios> {
    const repo = getRepository(Usuarios)
    const usuario = data.usuario
    if (!(await repo.findOne({ where: { usuario } }))) {
      return null
    }
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

export default new IUsuariosRepository()
