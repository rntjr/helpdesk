import { ICRUDRepository } from '../../../ICRUDRepository'
import { getRepository, DeleteResult, UpdateResult } from 'typeorm'
import { Usuarios } from '../../../../models/core/authentication/Usuarios'

class UsuariosRepository implements ICRUDRepository {
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

  async update(id: number, data: Usuarios): Promise<UpdateResult> {
    const repo = getRepository(Usuarios)
    if (!(await repo.findOne({ where: { id } }))) {
      return null
    }
    return await repo.update(id, data)
  }

  async delete(id: number): Promise<DeleteResult> {
    const repo = getRepository(Usuarios)
    return await repo.delete(id)
  }
}

export default new UsuariosRepository()
