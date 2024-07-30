import { CheckoutController } from '../../input/controller/checkout-controller';

export const checkoutModule = (): CheckoutController => {
  return new CheckoutController();
};
