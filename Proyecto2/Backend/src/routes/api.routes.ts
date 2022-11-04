import controller from '../controller/api.controller';
import express from 'express';
const router = express.Router();

router.get("/ping",controller.ping)
router.post("/prueba",controller.apiController.parser)
router.post('/parsear',controller.parse);
router.get('/ast',controller.ast);
export default router;