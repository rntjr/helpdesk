import { getRepository } from 'typeorm'
import { ITelas, Telas } from '../../models/core/Telas'
import { ICRUDRepository } from '../ICRUDRepository'

export interface ITelasRepository extends ICRUDRepository {
  create(data: ITelas): Promise<ITelas>
  update(id: number, data: ITelas): Promise<ITelas>
  delete(id: number): Promise<boolean>
  find()
}

export class TelasRepository implements ITelasRepository {
  async create(data: Telas): Promise<Telas> {
    const repo = getRepository(Telas)
    const telas = repo.create(data)
    return await repo.save(telas)
  }

  async update(id: number, data: Telas): Promise<Telas> {
    const repo = getRepository(Telas)
    const telas = repo.create(data)
    if ((await repo.update(id, telas)).affected < 1) {
      return null
    }
    return await repo.findOne(id)
  }

  async delete(id: number): Promise<boolean> {
    const repo = getRepository(Telas)
    if ((await repo.delete(id)).affected < 1) {
      return false
    }
    return true
  }

  async find(): Promise<void> {
    return null
  }
}
