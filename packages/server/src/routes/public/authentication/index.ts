import { Router, Request, Response } from 'express'
import { AuthenticationController } from '../../../controllers/core/AuthenticationController'
import { UsuariosRepository } from '../../../repositories/core/UsuariosRepository'
import { CreateTokenService } from '../../../services/core/CreateTokenService'
import { IsValidatePassword } from '../../../services/core/IsValidatePassword'

const router = Router()

router.post('/', async (request: Request, response: Response) => {
  const authController = new AuthenticationController(
    new UsuariosRepository(),
    new IsValidatePassword(new UsuariosRepository()),
    new CreateTokenService()
  )
  return await authController.execute(request, response)
})

export default router
