import 'reflect-metadata'
import './database/connect'
import express from 'express'
import { environment as env } from '../../../environment'
import router from './routes'

const app = express()

app.use(express.json())
app.use(router)

app.listen(env.server.port, () =>
  console.log('Started server at http://localhost:3000/')
)
