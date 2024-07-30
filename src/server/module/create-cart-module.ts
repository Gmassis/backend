import { CartRepository } from '../../repository/cart-repository';
import { CreateCartController } from '../../input/controller/create-cart-controller';

export const createCartModule = (): CreateCartController => {
  const cartRepository = new CartRepository();
  return new CreateCartController(cartRepository);
};
