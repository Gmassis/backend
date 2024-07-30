import { UserResponse } from '../input/response/user-response';
import userSchema from '../database/user-schema';
import { IUser } from '../interface/user-interface';

export class UserRepository implements IUser {
  public async retrieve(email: string): Promise<UserResponse> {
    const user = await userSchema.findOne({ email });
    if (!user) return null;

    return {
      id: user._id,
      name: user.name,
      email: user.email,
      pass: user.pass,
      gender: user.gender,
    };
  }

  public async create(name: string, email: string, pass: string, gender: string): Promise<void> {
    const user = await userSchema.findOne({ email });
    if (user) {
      throw new Error('User already exists.');
    }
    await userSchema.create({ name, email, pass, gender });
  }
}
