const { environment } = require('../../environment')

module.exports = {
  type: 'postgres',
  host: environment.server.database.host,
  port: environment.server.database.port,
  username: environment.server.database.username,
  password: environment.server.database.password,
  database: environment.server.database.database,
  synchronize: false,
  logging: false,
  entities: ['./src/**/Models/*.ts'],
  migrations: ['./src/Database/Migrations/*.ts'],
  cli: {
    entitiesDir: './src/**/Models',
    migrationsDir: './src/Database/Migrations'
  }
}
