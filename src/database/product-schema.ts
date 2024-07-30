import { model, Schema } from 'mongoose';

const ProductSchema: Schema = new Schema({
  name: String,
  type: String,
  price: Number,
  measurement_unit: String,
  color: String,
  background: String,
  is_featured: Boolean,
  image: String,
});

export default model('ProductSchema', ProductSchema);
