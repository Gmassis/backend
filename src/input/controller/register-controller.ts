import { IUser } from '../../interface/user-interface';
import { UserRequest } from '../request/user-request';

export class RegisterController {
  constructor(private iUser: IUser) {}

  public async handle(p, body: any): Promise<void> {
    const request: UserRequest = body;
    return await this.iUser.create(request.name, request.email, request.pass, request.gender);
  }
}
