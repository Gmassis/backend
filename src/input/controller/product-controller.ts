import { IProduct } from '../../interface/product-interface';
import { ProductRequest } from '../request/product-request';
import { ProductResponse } from '../response/product-response';

export class ProductController {
  constructor(private iProduct: IProduct) {}

  public async handle(params: any, b): Promise<ProductResponse[]> {
    const request: ProductRequest = params;
    return await this.iProduct.retrieve(request.is_featured);
  }
}
