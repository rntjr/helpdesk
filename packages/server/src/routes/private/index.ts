import express from 'express'
import helpdeskRoutes from './helpdesk'
import administrationRoutes from './administration'

const app = express.Router()

app.use('/administration', administrationRoutes)
app.use('/helpdesk', helpdeskRoutes)

export default app
