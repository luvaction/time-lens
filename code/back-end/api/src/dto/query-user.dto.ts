// src/user/dto/query-user.dto.ts
// import { Optional } from '@nestjs/mapped-types';
import { IsString, IsOptional, IsNumber } from 'class-validator';

export class QueryUserDto {
  @IsNumber()
  @IsOptional()
  page: number;

  @IsNumber()
  @IsOptional()
  ipp: number;

  @IsString()
  @IsOptional()
  start_date: string;

  @IsString()
  @IsOptional()
  end_date: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  searchOption: string;
}
