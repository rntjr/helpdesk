import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { environment as env } from '../../../../environment'
import path from 'path'

export const options: TypeOrmModuleOptions = {
  type: 'postgres',
  host: env.server.database.host,
  port: env.server.database.port,
  username: env.server.database.username,
  password: env.server.database.password,
  database: env.server.database.database,
  synchronize: true,
  logging: false,
  entities: [path.join(__dirname, '..', '**', '*.entity.ts')],
  migrations: [path.join(__dirname, '..', 'migrations', '*')]
}
