import { MongoMemoryServer } from 'mongodb-memory-server';
import { connect, disconnect } from 'mongoose';

async function startMongoDBMock() {
  const mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return mongoServer;
}

async function stopMongoDBMock(mongoServer) {
  await disconnect();
  await mongoServer.stop();
}

export { startMongoDBMock, stopMongoDBMock };
