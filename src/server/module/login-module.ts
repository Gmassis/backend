import { UserRepository } from '../../repository/user-repository';
import { LoginController } from '../../input/controller/login-controller';

export const loginModule = (): LoginController => {
  const userRepository = new UserRepository();
  return new LoginController(userRepository);
};
