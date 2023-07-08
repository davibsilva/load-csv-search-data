import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  city: String,
  country: String,
  favorite_sport: String,
});

const User = model('User', UserSchema);

export { User };
