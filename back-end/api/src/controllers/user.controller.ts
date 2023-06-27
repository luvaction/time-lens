// src/controllers/user.controller.ts
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { UserRegistrationService } from 'src/services/user/user.registration.service';
import { UserService } from 'src/services/user.service';
import { ValidationPipe } from '../pipes/validation.pipe';
import { UserDto } from 'src/dto/user.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userRegistrationService: UserRegistrationService,
    private readonly userService: UserService,
  ) {}

  @Get()
  async getAllUsers() {
    const users = await this.userService.getAll();
    return users;
  }

  @Post('/register')
  @UsePipes(new ValidationPipe())
  async registerUser(@Body() userDto: UserDto) {
    const { username, password } = userDto;
    const newUser = await this.userRegistrationService.createUser(
      username,
      password,
    );
    return newUser;
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    const user = await this.userService.get(id);
    return user;
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async updateUser(@Param('id') id: string, @Body() userDto: UserDto) {
    const { username, password } = userDto;
    const updatedUser = await this.userService.update(id, username, password);
    return updatedUser;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const result = await this.userService.delete(id);
    return result;
  }
}
