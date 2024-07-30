import { ProductRepository } from '../../repository/product-repository';
import { ProductController } from '../../input/controller/product-controller';

export const productModule = (): ProductController => {
  const productRepository = new ProductRepository();
  return new ProductController(productRepository);
};
