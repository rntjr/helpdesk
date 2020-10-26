import express from 'express'
import chamadosRoutes from './chamados'

const app = express.Router()

app.use('/chamados', chamadosRoutes)

export default app
