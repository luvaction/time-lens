// src/services/user.service.ts
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserListDto } from 'src/dto/user-list.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findUsers(
    page: number, 
    ipp: number,
    start_date?: string, 
    end_date?: string,
    userInfo?: any,
    searchOption?: string,
    sort?: string,
    order?: 'asc' | 'desc'
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
          if (searchOption === 'all') {
            query = query.andWhere(`user.${key} LIKE :value`, { value: `%${value}%` });
          } else if (searchOption === 'start') {
            query = query.andWhere(`user.${key} LIKE :value`, { value: `${value}%` });
          } else if (searchOption === 'end') {
            query = query.andWhere(`user.${key} LIKE :value`, { value: `%${value}` });
          } else {
            query = query.andWhere(`user.${key} = :value`, { value: value });
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
    const users = await query.skip((page - 1) * ipp).take(ipp).getMany();
  
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
  

  async findOne(user_id: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { user_id } });
    console.log("user", user);
    // if (!user) {
    //   throw new NotFoundException(`User with ID ${user_id} not found`);
    // }

    return user;
  }


  async findAll(): Promise<string> {
    return 'get User';
  }

  async create(user: Partial<User>): Promise<User> {
    console.log("craete");
    console.log(user)
    const createdUser = this.usersRepository.create(user);
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
}
