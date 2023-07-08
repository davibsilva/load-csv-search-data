import { Router } from 'express';
import { usersController } from '../controllers/users.controller.js';

const router = Router();

router.get('/', usersController.search);

export { router as usersRouter };
