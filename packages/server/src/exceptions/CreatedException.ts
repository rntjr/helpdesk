export class CreatedException extends Error {
  message: string
  status: number

  constructor(message: string) {
    super(message)
    this.message = message
    this.status = 201
  }
}
