import { Router } from "express"
import {pin} from '../controllers/index.controllers.js'
const router = Router()


router.get('/pin', pin)

export default router