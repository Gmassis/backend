import cartSchema from '../database/cart-schema';
import { ProductResponse } from '../input/response/product-response';
import { ICart } from '../interface/cart-interface';

export class CartRepository implements ICart {
  public async create(idUser: string, idProduct: string): Promise<void> {
    await cartSchema.create({ user: idUser, product: idProduct });
  }

  public async retrieve(idUser: string): Promise<ProductResponse[]> {
    const cart = await cartSchema.find({ user: idUser }).populate('product');
    if (!cart) return null;
    return cart.map(c => ({
      _id: c.product._id.toString(),
      name: c.product.name,
      image: c.product.image,
      type: c.product.type,
      price: c.product.price,
      measurement_unit: c.product.measurement_unit,
      color: c.product.color,
      is_featured: c.product.is_featured,
      background: c.product.background,
    }));
  }

  public async delete(idUser: string, idProduct: string, deleteAllCart: string): Promise<void> {
    if (deleteAllCart === 'true') {
      await cartSchema.deleteMany({ user: idUser });
      return;
    }
    await cartSchema.findOneAndDelete({ user: idUser, product: idProduct });
  }
}
