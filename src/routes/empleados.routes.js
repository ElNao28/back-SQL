import { Router } from "express"
import {getEmpleados,postEmpleados,putEmpleados,deleteEmpleados,getEmpleadosById, patchEmpleados} from '../controllers/empleados.controller.js'
const router = Router()

router.get('/empleados',getEmpleados)

router.get('/empleados/:id',getEmpleadosById)

router.post('/empleados',postEmpleados)

router.put('/empleados/:id',putEmpleados)

router.patch('/empleados/:id',patchEmpleados)

router.delete('/empleados/:id',deleteEmpleados)

export default router