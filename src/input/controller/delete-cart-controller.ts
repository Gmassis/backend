import { ICart } from '../../interface/cart-interface';
import { CartRequest } from '../request/cart-request';

export class DeleteCartController {
  constructor(private iCart: ICart) {}

  public async handle(params: any, b): Promise<void> {
    const request: CartRequest = params;
    return await this.iCart.delete(request.idUser, request.idProduct, request.deleteAllCart);
  }
}
