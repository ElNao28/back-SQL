import express from 'express'
import rutasEmpleados from './routes/empleados.routes.js'
import rutasIndex from './routes/index.routes.js'
import './config.js'

const app = express();
app.use(express.json())

app.use(rutasEmpleados)
app.use(rutasIndex)

export default app;