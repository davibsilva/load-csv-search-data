import fs from 'fs';
import { parse } from 'fast-csv';
import { User } from '../models/users.model.js';

const loadCSV = async (filePath) => {
  return await saveData(await parseFileToList(filePath));
};

const parseFileToList = (filePath) => {
  return new Promise((resolve, reject) => {
    var userList = [];

    fs.createReadStream(filePath)
      .pipe(parse({ ignoreEmpty: true, trim: true, headers: true }))
      .on('error', () => {
        reject(new Error('Invalid file format'));
      })
      .on('data', (row) => {
        userList.push(row);
      })
      .on('end', async () => {
        resolve(userList);
      });
  });
};

const saveData = async (userList) => {
  const bulkOps = getBulkOps(userList);
  // Delete existing users because in the example csv we dont have unique identifier
  await User.deleteMany();
  return await User.bulkWrite(bulkOps);
};

const getBulkOps = (userList) => {
  return userList.map((user) => ({
    insertOne: {
      document: user,
    },
  }));
};

const filesService = {
  loadCSV,
};

export { filesService };
