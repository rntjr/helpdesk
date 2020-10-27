import { Request, Response } from 'express'
import { AcessarDTO } from '../../dto/core/AcessarDTO'
import { BadRequestException } from '../../exceptions/BadRequestException'
import { HttpException } from '../../exceptions/HttpException'
import { IUsuariosRepository } from '../../repositories/core/UsuariosRepository'
import { ICreateTokenService } from '../../services/core/CreateTokenService'
import { NotFoundException } from '../../exceptions/NotFoundException'
import { IIsValidatePassword } from '../../services/core/IsValidatePassword'

export class AuthenticationController {
  constructor(
    private usuarioRepo: IUsuariosRepository,
    private isValidateUsuario: IIsValidatePassword,
    private createToken: ICreateTokenService
  ) {}

  async execute(request: Request, response: Response): Promise<Response> {
    const acessar: AcessarDTO = request.body
    try {
      if (!acessar.usuario || !acessar.senha) {
        throw new BadRequestException('Sem dados na requisição!')
      }
      await this.isValidateUsuario.execute({
        usuario: acessar.usuario,
        senha: acessar.senha
      })
      const usuario = await this.usuarioRepo.findByUsuario(acessar.usuario)
      if (!usuario) {
        throw new NotFoundException('Usuario não encontrado')
      }
      delete usuario.senha
      const token = await this.createToken.execute({ usuario: usuario })
      return response.status(200).send({ token })
    } catch (error) {
      const err: HttpException = error
      return response.status(err.status || 500).send(err.message)
    }
  }
}
