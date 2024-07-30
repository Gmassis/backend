import { ICart } from '../../interface/cart-interface';
import { CartRequest } from '../request/cart-request';
import { ProductResponse } from '../response/product-response';

export class RetrieveCartController {
  constructor(private iCart: ICart) {}

  public async handle(params: any, b): Promise<ProductResponse[]> {
    const request: CartRequest = params;
    return await this.iCart.retrieve(request.idUser);
  }
}
