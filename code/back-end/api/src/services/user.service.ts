// src/services/user.service.ts
import {
  Injectable,
  NotFoundException,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserListDto } from 'src/dto/user-list.dto';
import { UserDto } from 'src/dto/user.dto';
import * as bcrypt from 'bcrypt';
import { UserValidationPasswordService } from './user/user.validationPassword.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly passwordService: UserValidationPasswordService,
  ) {}

  async findUsers(
    page: number,
    ipp: number,
    start_date?: string,
    end_date?: string,
    userInfo?: any,
    searchOption?: string,
    sort?: string,
    order?: 'asc' | 'desc',
  ): Promise<UserListDto> {
    // 1. Define the query for the user data
    let query = this.usersRepository.createQueryBuilder('user');

    // 2. Filter users based on the given parameters
    if (start_date && end_date) {
      query = query.andWhere('user.created_at BETWEEN :start AND :end', {
        start: start_date,
        end: end_date,
      });
    }

    // 3. If userInfo exists, use searchOption to decide how to filter
    if (userInfo) {
      for (const key in userInfo) {
        if (Object.prototype.hasOwnProperty.call(userInfo, key)) {
          const value = userInfo[key];
          console.log('key-value', key, value);
          if (searchOption === 'all') {
            query = query.andWhere(`user.${key} = :${key}`, { [key]: value });
          } else if (searchOption === 'start') {
            query = query.andWhere(`user.${key} = :${key}`, { [key]: value });
          } else if (searchOption === 'end') {
            query = query.andWhere(`user.${key} = :${key}`, { [key]: value });
          } else {
            query = query.andWhere(`user.${key} = :${key}`, { [key]: value });
          }
        }
      }
    }

    // 4. If sort exists, apply it to the order by clause
    if (sort && order) {
      query = query.orderBy(`user.${sort}`, order === 'asc' ? 'ASC' : 'DESC');
    } else {
      // If not specified, order by created_at in descending order
      query = query.orderBy('user.created_at', 'DESC');
    }

    // 5. Get the total count of the users
    const totalCount = await query.getCount();

    // 6. Limit the query and get the user data
    const users = await query
      .skip((page - 1) * ipp)
      .take(ipp)
      .getMany();

    // 7. Calculate the total pages
    const totalPage = Math.ceil(totalCount / ipp);

    // 8. Return the paginated data
    return {
      data: users,
      page: page,
      totalPage: totalPage,
      totalCount: totalCount,
    };
  }

  async findOne(searchParams: any): Promise<User> {
    let query = this.usersRepository.createQueryBuilder('user');

    for (const key in searchParams) {
      if (Object.prototype.hasOwnProperty.call(searchParams, key)) {
        const value = searchParams[key];
        query = query.andWhere(`user.${key} = :${key}`, { [key]: value });
      }
    }

    const user = await query.getOne();

    return user;
  }

  async findAll(): Promise<string> {
    return 'get User';
  }

  async create(userDto: UserDto): Promise<User> {
    const { user_id, password, name, nickname, sex, email, address } = userDto;
    const encryptedPassword = await this.passwordService.encryptPassword(
      password,
    );
    const createdUser = this.usersRepository.create({
      user_id,
      password: encryptedPassword,
      name,
      nickname,
      sex,
      email,
      address,
    });
    const savedUser = await this.usersRepository.save(createdUser);
    return savedUser;
  }

  async update(
    id: string,
    useranme: string,
    password: string,
  ): Promise<string> {
    // Typically, you would handle updating a resource here.
    return 'Test PUT!';
  }

  async patch(): Promise<string> {
    // Typically, you would handle patching a resource here.
    return 'Test PATCH!';
  }

  async delete(id: string): Promise<string> {
    // Typically, you would handle deleting a resource here.
    return 'Test DELETE!';
  }

  //Complex

  async validateUser(user_id: string, password: string): Promise<User> {
    const user = await this.findOne({ user_id });

    if (!user) {
      throw new NotFoundException(`User with ID ${user_id} not found`);
    }

    const isValidPassword = await this.passwordService.validatePassword(
      password,
      user.password,
    );

    if (!isValidPassword) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Exclude password from the returned user object
    if (user && user.password) {
      delete user.password;
    }

    return user;
  }

  private async encryptPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }
}
