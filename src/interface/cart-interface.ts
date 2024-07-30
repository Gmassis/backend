import { ProductResponse } from '../input/response/product-response';

export interface ICart {
  create(idUser: string, idProduct: string): Promise<void>;
  retrieve(idUser: string): Promise<ProductResponse[]>;
  delete(idUser: string, idProduct: string, deleteAllCart: string): Promise<void>;
}
