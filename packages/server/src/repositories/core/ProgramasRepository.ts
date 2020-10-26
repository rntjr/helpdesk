import { getRepository } from 'typeorm'
import { IProgramas, Programas } from '../../models/core/Programas'
import { ICRUDRepository } from '../ICRUDRepository'

export interface IProgramasRepository extends ICRUDRepository {
  create(data: IProgramas): Promise<IProgramas>
  update(id: number, data: IProgramas): Promise<IProgramas>
  delete(id: number): Promise<boolean>
  find()
}

export class ProgramasRepository implements IProgramasRepository {
  async find(): Promise<void> {
    return null
  }

  async create(data: Programas): Promise<Programas> {
    const repo = getRepository(Programas)
    const programas = repo.create(data)
    return await repo.save(programas)
  }

  async update(id: number, data: Programas): Promise<Programas> {
    const repo = getRepository(Programas)
    const programas = repo.create(data)
    if ((await repo.update(id, programas)).affected < 1) {
      return null
    }
    return await repo.findOne(id)
  }

  async delete(id: number): Promise<boolean> {
    const repo = getRepository(Programas)
    if ((await repo.delete(id)).affected < 1) {
      return false
    }
    return true
  }
}
