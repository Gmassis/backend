import { ProductResponse } from '../input/response/product-response';

export interface IProduct {
  retrieve(is_featured: boolean): Promise<ProductResponse[]>;
}
