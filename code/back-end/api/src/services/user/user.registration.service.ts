// src/services/user/user.registration.service.ts
import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service'; // Assuming you have a UsersService which interacts with the database
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserRegistrationService {
  constructor(private readonly usersService: UserService) {}

  async createUser(username: string, password: string): Promise<User> {
    // 1. Validate the data here (username is unique, password is strong, etc.)
    // You can throw an exception if the data is invalid.

    // 2. Encrypt the password (You should NEVER store passwords in plaintext)
    const encryptedPassword = await this.encryptPassword(password);

    // 3. Save the new user to the database
    const newUser = await this.usersService.create({
      username,
      password: encryptedPassword,
    });

    // 4. Return the new user (But do not include the encrypted password)
    return newUser;
  }

  private async encryptPassword(password: string): Promise<string> {
    // Encrypt the password here. You could use bcrypt, argon2, etc.
    // This is just a placeholder. DO NOT actually use this in production.
    return `encrypted-${password}`;
  }
}
