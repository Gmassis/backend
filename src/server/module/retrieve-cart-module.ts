import { CartRepository } from '../../repository/cart-repository';
import { RetrieveCartController } from '../../input/controller/retrieve-cart-controller';

export const retrieveCartModule = (): RetrieveCartController => {
  const cartRepository = new CartRepository();
  return new RetrieveCartController(cartRepository);
};
