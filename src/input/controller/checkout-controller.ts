import Stripe from 'stripe';
import { CheckoutRequest } from '../request/checkout-request';

export class CheckoutController {
  constructor() {}

  public async handle(p, body: any): Promise<unknown> {
    const request: CheckoutRequest[] = body;

    const products = request.map((product: CheckoutRequest) => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: product.name,
        },
        unit_amount: product.unit_amount * 100,
      },
      quantity: product.quantity,
    }));

    const stripe = new Stripe(
      'sk_test_51PfnA2Ege2iOMdioYgQTDkjFAj2HSzVEBU6F6KZVg54vuvCEm2EcwELbFtthuPznVGx3r9tNajFso39bYSMc1LmT00iQsNgmdQ',
    );

    const session = await stripe.checkout.sessions.create({
      line_items: [...products],
      mode: 'payment',
      success_url: 'http://localhost:4200/home',
      cancel_url: 'http://localhost:4200/cart',
    });

    return session;
  }
}
