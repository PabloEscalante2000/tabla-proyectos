import {Router} from 'express';
import {getTareas,postTareas,getTarea,deleteTareas,putTareas} from '../controllers/tareas.controller.js';

const router = Router()

router.get('/tareas/:id',getTarea)

router.get("/tareas",getTareas)

router.post("/tareas",postTareas)

router.put("/tareas/:id",putTareas)

router.delete("/tareas/:id",deleteTareas)

export default router;