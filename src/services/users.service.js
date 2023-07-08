import { User } from '../models/users.model.js';

const search = async (query) => {
  let searchQuery = null;

  if (query != null) {
    const likeStatement = {
      $regex: query,
      $options: 'i',
    };
    searchQuery = {
      $or: [
        { name: likeStatement },
        { city: likeStatement },
        { country: likeStatement },
        { favorite_sport: likeStatement },
      ],
    };
  }

  return {
    count: await User.count(searchQuery),
    data: await User.find(searchQuery),
  };
};

const usersService = {
  search,
};

export { usersService };
