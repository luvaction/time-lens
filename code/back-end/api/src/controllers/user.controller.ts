// src/controllers/user.controller.ts
import {
  Res,
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  UsePipes,
  Query,
  MethodNotAllowedException,
} from '@nestjs/common';
import { Response } from 'express';
import { UserRegistrationService } from 'src/services/user/user.registration.service';
import { UserService } from 'src/services/user.service';
import { ValidationPipe } from '../pipes/validation.pipe';
import { UserDto } from 'src/dto/user.dto';
import { UserListDto } from 'src/dto/user-list.dto';
import { QueryUserDto } from 'src/dto/query-user.dto';
import { LoginDto } from 'src/dto/login.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userRegistrationService: UserRegistrationService,
    private readonly userService: UserService,
  ) {}

  @Get('list')
  findUsers(
    @Query('page') page: number,
    @Query('ipp') ipp: number,
    @Query('start_date') start_date?: string,
    @Query('end_date') end_date?: string,
    @Query('userInfo') userInfo?: any,
    @Query('searchOption') searchOption?: string,
    @Query('sort') sort?: string,
    @Query('order') order?: 'asc' | 'desc',
  ): Promise<UserListDto> {
    return this.userService.findUsers(
      page,
      ipp,
      start_date,
      end_date,
      userInfo,
      searchOption,
      sort,
      order,
    );
  }

  @Get(':user_id')
  async getUser(
    @Param('user_id') user_id: string,
    @Query() searchParams: UserDto,
  ) {
    const user = await this.userService.findOne(searchParams);
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
    console.log('create');
    // const newUser = await this.userRegistrationService.createUser(userDto);
    const newUser = await this.userRegistrationService.createUser(userDto);
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

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    if (!loginDto.user_id || !loginDto.password) {
      throw new MethodNotAllowedException('User ID and Password are required');
    }

    const user = await this.userService.validateUser(
      loginDto.user_id,
      loginDto.password,
    );

    // Here, usually a JWT token will be created and returned
    return res.status(200).send(user);
  }
}
