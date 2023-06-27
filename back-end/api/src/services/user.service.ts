// src/services/test.service.ts
import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {
  async get(id: string): Promise<string> {
    return `GET ${id}`;
  }

  async getAll(): Promise<string> {
    return 'get User';
  }

  async create(user: Partial<User>): Promise<User> {
    // 데이터베이스에서 새로운 사용자를 만들어야 합니다.
    // 이 예제에서는 가상의 사용자를 반환합니다.
    const createdUser = {
      id: Math.floor(Math.random() * 10000),
      ...user,
    } as User;

    // 실제로는 TypeORM 등의 라이브러리를 사용하여 사용자를 데이터베이스에 저장해야 합니다.

    return createdUser;
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
