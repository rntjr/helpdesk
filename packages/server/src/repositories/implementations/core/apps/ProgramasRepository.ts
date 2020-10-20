import { getRepository, UpdateResult } from 'typeorm'
import { Programas } from '../../../../models/core/apps/Programas'
import { ICRUDRepository } from '../../../ICRUDRepository'

export class ProgramasRepositoryImpl implements ICRUDRepository {
  async create(data: Programas): Promise<Programas> {
    if (!data.nome) {
      return null
    }
    const repo = getRepository(Programas)
    return await repo.save(data)
  }

  async update(id: number, data: Programas): Promise<UpdateResult> {
    const repo = getRepository(Programas)
    if (!(await repo.findOne({ where: { id } }))) {
      return null
    }
    return await repo.update(id, data)
  }

  delete(): void {
    return null
  }
}
