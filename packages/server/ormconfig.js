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
  entities: ['./src/**/models/*.ts'],
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    entitiesDir: './src/**/models',
    migrationsDir: './src/database/migrations'
  }
}
