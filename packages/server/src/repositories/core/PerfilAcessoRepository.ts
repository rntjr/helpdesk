import { getRepository } from 'typeorm'
import { IPerfisAcesso, PerfisAcesso } from '../../models/core/PerfisAcesso'
import { ICRUDRepository } from '../ICRUDRepository'

export interface IPerfilAcessoRepository extends ICRUDRepository {
  find(data: IPerfisAcesso): Promise<IPerfisAcesso[]>
  create(data: IPerfisAcesso): Promise<IPerfisAcesso>
  update(id: number, data: IPerfisAcesso): Promise<IPerfisAcesso>
  delete(id: number): Promise<boolean>
}

export class PerfilAcessoRepository implements IPerfilAcessoRepository {
  async find(data: PerfisAcesso): Promise<PerfisAcesso[]> {
    const repo = getRepository(PerfisAcesso)
    return await repo.find(data)
  }

  async create(data: PerfisAcesso): Promise<PerfisAcesso> {
    const repo = getRepository(PerfisAcesso)
    const perfisAcesso = repo.create(data)
    const create = await repo.save(perfisAcesso)
    return create
  }

  async update(id: number, data: PerfisAcesso): Promise<PerfisAcesso> {
    const repo = getRepository(PerfisAcesso)
    const perfisAcesso = repo.create(data)
    if ((await repo.update(id, perfisAcesso)).affected < 1) {
      return null
    }
    return await repo.findOne(id)
  }

  async delete(id: number): Promise<boolean> {
    const repo = getRepository(PerfisAcesso)
    if ((await repo.delete(id)).affected < 1) {
      return false
    }
    return true
  }
}
