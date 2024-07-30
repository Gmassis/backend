import { CartRepository } from '../../repository/cart-repository';
import { DeleteCartController } from '../../input/controller/delete-cart-controller';

export const deleteCartModule = (): DeleteCartController => {
  const cartRepository = new CartRepository();
  return new DeleteCartController(cartRepository);
};
