import controller from '../controller/api.controller';
import express from 'express';
const router = express.Router();

router.get("/ping",controller.ping)
router.get("/prueba",controller.apiController.funcion1)
router.post('/parsear',controller.parse);
export default router;