import { UserResponse } from '../input/response/user-response';

export interface IUser {
  retrieve(email: string): Promise<UserResponse>;
  create(name: string, email: string, pass: string, gender: string): Promise<void>;
}
