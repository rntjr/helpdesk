export class NoContentException extends Error {
  message: string
  status: number

  constructor(message: string) {
    super(message)
    this.message = message
    this.status = 204
  }
}
