export default class AppError {
  public readonly message: string
  public readonly status: number

  constructor(message: string, status: number = 400) {
    this.message = message
    this.status = status
  }
}