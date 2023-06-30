// src/dto/user-list.dto.ts

import { User } from '../entities/user.entity';

export class UserListDto {
  data: User[];
  page: number;
  totalPage: number;
  totalCount: number;
}