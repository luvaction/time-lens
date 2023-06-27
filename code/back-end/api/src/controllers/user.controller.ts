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

  @Get(':user_id')
  async getUser(@Param('user_id') user_id: string) {
    const user = await this.userService.findOne(user_id);
    return user;
  }

  @Get()
  async getAllUsers() {
    const users = await this.userService.findAll();
    return users;
  }


  @Post()
  @UsePipes(new ValidationPipe())
  async registerUser(@Body() userDto: UserDto) {
    const { user_id, password } = userDto;
    const newUser = await this.userRegistrationService.createUser(
      user_id,
      password,
    );
    return newUser;
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async updateUser(@Param('id') id: string, @Body() userDto: UserDto) {
    const { user_id, password } = userDto;
    const updatedUser = await this.userService.update(id, user_id, password);
    return updatedUser;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const result = await this.userService.delete(id);
    return result;
  }
}
