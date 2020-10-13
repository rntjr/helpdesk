import dotenv from 'dotenv'
import path from 'path'

// Environment config
dotenv.config({ path: path.join(__dirname, '.env') })

export interface Environment {
  server: {
    token: {
      secret: string
    },
    port: number,
    database: {
      type: string,
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
    token: {
      secret:
        process.env.SERVER_TOKEN_SECRET ||
        '5Z90aH02c5s1x8ET8AeM5dThhAryZ5g8Qf0L9w9sjjQeb9Xe0a'
    },
    port: Number(process.env.SERVER_PORT) || 3000,
    database: {
      type: process.env.SERVER_DATABASE_TYPE || 'postgres',
      host: process.env.SERVER_DATABASE_HOST || 'localhost',
      port: Number(process.env.SERVER_DATABASE_PORT) || 5432,
      database: process.env.SERVER_DATABASE_NAME || 'postgres',
      username: process.env.SERVER_DATABASE_USERNAME || 'postgres',
      password: process.env.SERVER_DATABASE_PASSWORD || 'postgres'
    }
  }
}
