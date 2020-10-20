import { Router, Request, Response } from 'express'
import { AuthenticationController } from '../../../controllers/core/authentication/AuthenticationController'
import { UsuariosRepositoryImpl } from '../../../repositories/implementations/UsuariosRepositoryImpl'
import { TokenService } from '../../../services/core/authentication/TokenService'
import { ValidatePasswordService } from '../../../services/core/authentication/ValidatePasswordService'

const router = Router()

router.post('/', async (request: Request, response: Response) => {
  const authController = new AuthenticationController(
    new UsuariosRepositoryImpl(),
    new ValidatePasswordService(new UsuariosRepositoryImpl()),
    new TokenService()
  )
  return await authController.execute(request, response)
})

export default router
