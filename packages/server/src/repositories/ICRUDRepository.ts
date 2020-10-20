export interface ICRUDRepository {
  create(data)
  update(id: number, data)
  delete(id: number)
}
