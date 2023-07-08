import { usersService } from '../services/users.service.js';

const usersController = {
  search: async (req, res) => {
    try {
      const query = req.query.q;
      const data = await usersService.search(query);

      res.status(200).json({ success: true, result: data });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  },
};

export { usersController };
