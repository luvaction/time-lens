// src/services/user.service.ts
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOne(user_id: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { user_id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${user_id} not found`);
    }

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
