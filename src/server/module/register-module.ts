import { UserRepository } from '../../repository/user-repository';
import { RegisterController } from '../../input/controller/register-controller';

export const registerModule = (): RegisterController => {
  const userRepository = new UserRepository();
  return new RegisterController(userRepository);
};
