import { filesService } from '../services/files.service.js';

const filesController = {
  loadCSV: async (req, res) => {
    try {
      await filesService.loadCSV(req.file.path);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  },
};

export { filesController };
