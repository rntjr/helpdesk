import express from 'express'
import usuariosRoutes from './usuarios'
import perfilRoutes from './perfil'

const app = express.Router()

app.use('/usuarios', usuariosRoutes)
app.use('/perfil', perfilRoutes)

export default app
