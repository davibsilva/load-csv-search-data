db = db.getSiblingDB('testdatabase');

db.createUser({
  user: 'myuser',
  pwd: 'mypassword',
  roles: [
    {
      role: 'readWrite',
      db: 'testdatabase',
    },
  ],
});
