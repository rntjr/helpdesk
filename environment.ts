export interface Environment {
  web?: {
    port?: number
  };
  server?: {
    port?: number,
    database: {
      host: string,
      port: number,
      username: string,
      password: string,
      database: string
    }
  };
}

export const environment: Environment = {
  server: {
    port: Number(process.env.SERVER_PORT) || 4000,
    database: {
      host: String(process.env.SERVER_DATABASE_HOST) || 'localhost',
      port: Number(process.env.SERVER_DATABASE_PORT) || 5432,
      database: String(process.env.SERVER_DATABASE_NAME) || 'database',
      username: String(process.env.SERVER_DATABASE_USERNAME) || 'postgres',
      password: String(process.env.SERVER_DATABASE_PASSWORD) || 'postgres'
    }
  }
}
