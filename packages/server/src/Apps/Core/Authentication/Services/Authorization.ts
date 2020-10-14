export class Authorization {
  async execute(token: string): Promise<boolean> {
    if (!token) return false
    return await null
  }
}
