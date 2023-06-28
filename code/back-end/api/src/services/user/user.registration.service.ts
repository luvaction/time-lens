// src/services/user/user.registration.service.ts
import { ConflictException, Injectable } from '@nestjs/common';
import { UserService } from '../user.service'; // Assuming you have a UsersService which interacts with the database
import { User } from 'src/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserRegistrationService {
  constructor(private readonly usersService: UserService) {}

  async createUser(user_id: string, password: string): Promise<User> {
    console.log("createUser");
    const existingUser = await this.usersService.findOne(user_id);
    console.log("existingUser", existingUser);
    if (existingUser) {
      console.log("here")
      throw new ConflictException(`User with ID ${user_id} already exists`);
    }
    // 1. Validate the data here (user_id is unique, password is strong, etc.)
    // You can throw an exception if the data is invalid.

    // 2. Encrypt the password (You should NEVER store passwords in plaintext)
    const encryptedPassword = await this.encryptPassword(password);
    // 3. Save the new user to the database
    const newUser = await this.usersService.create({
      user_id,
      password: encryptedPassword,
    });
    // 4. Return the new user (But do not include the encrypted password)
    delete newUser.password;
    return newUser;
  }

  private async encryptPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    // const salt = "salt";
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }
}
