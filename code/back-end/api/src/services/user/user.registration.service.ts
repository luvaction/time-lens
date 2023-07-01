// src/services/user/user.registration.service.ts
import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { UserService } from '../user.service'; // Assuming you have a UsersService which interacts with the database
import { User } from 'src/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UserDto } from 'src/dto/user.dto';
import { UserValidationPasswordService } from './user.validationPassword.service';

@Injectable()
export class UserRegistrationService {
  constructor(private readonly usersService: UserService) {}

  async createUser(userDto: UserDto): Promise<User> {
    const existingUser = await this.usersService.findOne({
      user_id: userDto.user_id,
    });
    if (existingUser) {
      throw new ConflictException(
        `User with ID ${userDto.user_id} already exists`,
      );
    }

    const { user_id, password, name, nickname, sex, email, address } = userDto;

    // 1. Validate the data here (user_id is unique, password is strong, etc.)
    if (!user_id || !password) {
      throw new BadRequestException('user_id and password are required');
    }

    const createdUser = this.usersService.create({
      user_id,
      password,
      name,
      nickname,
      sex,
      email,
      address,
    });

    return createdUser;
  }
}
