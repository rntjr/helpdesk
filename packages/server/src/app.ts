import 'reflect-metadata'
import cors from 'cors'
import bodyParser from 'body-parser'
import express from 'express'
import router from './routes'
import { createConnection } from 'typeorm'
import ormconfig from '../ormconfig.js'

export interface IApp {
  express: express.Application
  middlewares(): void
  routes(): void
  database(): void
}

export class App {
  public express: express.Application
  constructor() {
    this.express = express()
    this.middlewares()
    this.routes()
    this.database()
  }

  private middlewares(): void {
    this.express.use(
      bodyParser.urlencoded({
        extended: true
      }),
      bodyParser.json()
    )
    this.express.use(cors())
  }

  private routes(): void {
    this.express.use(router)
  }

  private database(): void {
    createConnection(ormconfig)
      .then(() => console.log('Successfully connect with database'))
      .catch((err) => console.log({ message: err }))
  }
}
