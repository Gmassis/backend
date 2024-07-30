import { model, Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
  name: String,
  email: String,
  pass: String,
  gender: String,
});

export default model('UserSchema', UserSchema);
