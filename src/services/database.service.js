import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoDbHostname = process.env.MONGO_DB_HOSTNAME;
const databaseService = {
  connect: () =>
    connect(`mongodb://${mongoDbHostname}:27017/testdatabase`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
      }),
};

export { databaseService };
