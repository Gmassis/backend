import { model, Schema } from 'mongoose';
import userSchema from './user-schema';
import productSchema from './product-schema';

const CartSchema: Schema = new Schema({
  user: {
    type: Schema.Types.String,
    ref: userSchema,
  },
  product: {
    type: Schema.Types.String,
    ref: productSchema,
  },
});

export default model('CartSchema', CartSchema);
