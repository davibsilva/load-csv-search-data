import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { describe, it } from 'mocha';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { filesService } from '../services/files.service.js';
import { usersService } from '../services/users.service.js';

const { expect } = chai;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

chai.use(chaiAsPromised);

describe('Users tests scenarios', async () => {
  const filePath = join(__dirname, './data/csv-example.csv');
  await filesService.loadCSV(filePath);

  describe('Search users imported by csv file', () => {
    it('Should get users by name', async () => {
      const query = 'Vanessa';
      const result = (await usersService.search(query)).data;

      result.forEach((user) => {
        expect(user.name).to.contains(query);
      });
    });

    it('Should get users by city', async () => {
      const query = 'Kabul';
      const result = (await usersService.search(query)).data;

      result.forEach((user) => {
        expect(user.city).to.contains(query);
      });
    });
    it('Should get users by country', async () => {
      const query = 'Thailand';
      const result = (await usersService.search(query)).data;

      result.forEach((user) => {
        expect(user.country).to.contains(query);
      });
    });
    it('Should get users by favorite sport', async () => {
      const query = 'Juan';
      const result = (await usersService.search(query)).data;

      result.forEach((user) => {
        expect(user.favorite_sport).to.contains(query);
      });
    });
  });
});
