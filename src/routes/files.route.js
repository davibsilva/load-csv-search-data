import { Router } from 'express';
import multer from 'multer';
import { filesController } from '../controllers/files.controller.js';
import { validateFileParams } from '../middleware/validation.middleware.js';

// Setup upload directory with multer to be used as middleware
const upload = multer({ dest: 'tmp/csv/' });
const router = Router();

router.post(
  '/',
  upload.single('file'),
  validateFileParams,
  filesController.loadCSV,
);

export { router as filesRouter };
