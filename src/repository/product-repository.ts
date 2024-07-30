import { ProductResponse } from '../input/response/product-response';
import productSchema from '../database/product-schema';
import { IProduct } from '../interface/product-interface';

export class ProductRepository implements IProduct {
  public async retrieve(is_featured: unknown): Promise<ProductResponse[]> {
    const products =
      is_featured === 'true' || is_featured === true
        ? await productSchema.find({ is_featured: true })
        : await productSchema.find();

    if (!products) return null;

    return products.map(p => ({
      _id: p._id.toString(),
      name: p.name,
      type: p.type,
      price: p.price,
      measurement_unit: p.measurement_unit,
      color: p.color,
      background: p.background,
      is_featured: p.is_featured,
      image: p.image,
    }));
  }
}
