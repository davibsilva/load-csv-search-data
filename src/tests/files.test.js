import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { before, after } from 'mocha';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import {
  startMongoDBMock,
  stopMongoDBMock,
} from './config/mock-mongodb-setup.js';
import { filesService } from '../services/files.service.js';

const { expect } = chai;
let mongoServer;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

chai.use(chaiAsPromised);

before(async () => {
  mongoServer = await startMongoDBMock();
});

after(async () => {
  await stopMongoDBMock(mongoServer);
});

describe('Files tests scenarios', () => {
  describe('Load CSV file to database', () => {
    it('Should load CSV file to database', async () => {
      const filePath = join(__dirname, './data/csv-example.csv');
      const result = await filesService.loadCSV(filePath);

      expect(result).to.be.an('object');
      expect(result.insertedCount).to.equal(100);
    });

    it('Should throw an Invalid file format error', async () => {
      const filePath = join(__dirname, './data/invalid-csv-example.csv');
      await expect(filesService.loadCSV(filePath)).to.be.rejectedWith(
        Error,
        'Invalid file format',
      );
    });
  });
});
