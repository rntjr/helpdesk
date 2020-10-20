import { Router, Request, Response } from 'express'
import { RegistrationController } from '../../../controllers/core/authentication/RegistrationController'
import { UsuariosRepositoryImpl } from '../../../repositories/implementations/core/authentication/UsuariosRepositoryImpl'
import { AuthenticationService } from '../../../services/core/authentication/AuthenticationService'
import { TokenService } from '../../../services/core/authentication/TokenService'

const router = Router()

router.post('/', async (request: Request, response: Response) => {
  const registerController = new RegistrationController(
    new UsuariosRepositoryImpl(),
    new AuthenticationService(
      response,
      new UsuariosRepositoryImpl(),
      new TokenService()
    )
  )
  return await registerController.execute(request, response)
})

export default router
