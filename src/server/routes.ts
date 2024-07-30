import { Router } from 'express';
import { adapterExpress } from '../adapter/adapter-express';
import { healthModule } from './module/health-module';
import { registerModule } from './module/register-module';
import { loginModule } from './module/login-module';
import { productModule } from './module/product-module';
import { createCartModule } from './module/create-cart-module';
import { retrieveCartModule } from './module/retrieve-cart-module';
import { deleteCartModule } from './module/delete-cart-module';
import { checkoutModule } from './module/checkout-module';

const router = Router();

router.get('/v1/health', adapterExpress(healthModule));
router.get('/v1/product', adapterExpress(productModule));
router.post('/v1/register', adapterExpress(registerModule));
router.post('/v1/login', adapterExpress(loginModule));
router.post('/v1/cart', adapterExpress(createCartModule));
router.get('/v1/cart', adapterExpress(retrieveCartModule));
router.delete('/v1/cart', adapterExpress(deleteCartModule));
router.post('/v1/checkout', adapterExpress(checkoutModule));

export { router };
