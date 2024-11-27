import { Router } from "express";
import { create, getEventos, getEvento, deleteEvento} from "../controllers/eventoController.js";
import imageUpload from "../helper/image-upload.js";

const router = Router();

router.get('/listar', getEventos);
router.post('/criar', imageUpload.array('imagem'), create);
router.get('/:id', getEvento);
// router.put('/:id', updateEvento);
router.delete('/:id', deleteEvento);

export default router;
