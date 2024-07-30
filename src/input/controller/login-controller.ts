import { IUser } from '../../interface/user-interface';
import { LoginRequest } from '../request/login-request';
import { UserResponse } from '../response/user-response';

export class LoginController {
  constructor(private iUser: IUser) {}

  public async handle(p, body: any): Promise<UserResponse> {
    const request: LoginRequest = body;
    const response = await this.iUser.retrieve(request.email);
    if (request.pass !== response.pass) throw new Error('Invalid username or password.');
    delete response.pass;
    return response;
  }
}
