import { DeleteResult, UpdateResult } from 'typeorm'
export interface ICRUDRepository {
  create<T>(data: T): Promise<T>
  update<T>(id: number, data: T): Promise<UpdateResult>
  delete(id: number): Promise<DeleteResult>
}
