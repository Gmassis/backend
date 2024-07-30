import { ICart } from '../../interface/cart-interface';
import { CartRequest } from '../request/cart-request';

export class CreateCartController {
  constructor(private iCart: ICart) {}

  public async handle(p, body: any): Promise<void> {
    const request: CartRequest = body;
    return await this.iCart.create(request.idUser, request.idProduct);
  }
}
