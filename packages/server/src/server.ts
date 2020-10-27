import { App } from './app'
import { environment as env } from '../../../environment'

const server = new App().express
server.listen(env.server.port, () =>
  console.log(`Started server at http://localhost:${env.server.port}/`)
)
