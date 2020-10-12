const { environment } = require('../../environment')
const path = require('path')

module.exports = {
  type: 'postgres',
  host: environment.server.database.host,
  port: environment.server.database.port,
  username: environment.server.database.username,
  password: environment.server.database.password,
  database: environment.server.database.database,
  synchronize: false,
  logging: false,
  entities: [path.resolve(__dirname, 'src', '**', 'Models', '*.ts')],
  migrations: [
    path.resolve(__dirname, 'src', 'Database', 'Migrations', '*.ts')
  ],
  cli: {
    entitiesDir: path.resolve(__dirname, 'src', '**', 'Models'),
    migrationsDir: path.resolve(__dirname, 'src', 'Database', 'Migrations')
  }
}
