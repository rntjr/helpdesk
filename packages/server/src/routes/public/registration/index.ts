import { Router, Request, Response } from 'express'
import { RegistrationController } from '../../../controllers/core/RegistrationController'
import { UsuariosRepository } from '../../../repositories/core/UsuariosRepository'
import { CreateTokenService } from '../../../services/core/CreateTokenService'
import { IsUsuarioExists } from '../../../services/core/IsUsuarioExists'

const router = Router()

router.post('/', async (request: Request, response: Response) => {
  const registerController = new RegistrationController(
    new UsuariosRepository(),
    new CreateTokenService(),
    new IsUsuarioExists(new UsuariosRepository())
  )
  return await registerController.execute(request, response)
})

export default router
