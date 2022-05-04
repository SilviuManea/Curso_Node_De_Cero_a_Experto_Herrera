import { Router } from "express";
import { deleteUsuarioById, getUsuarioById, getUsuarios, postUsuario, putUsuarioById } from '../controllers/usuario.controller';


const router = Router();

// Definimos las 5 rutas.

router.get('/',getUsuarios)
router.get('/:id',getUsuarioById)
router.post('/',postUsuario)
router.put('/:id',putUsuarioById)
router.delete('/:id',deleteUsuarioById)



export default router;