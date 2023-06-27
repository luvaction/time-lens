import { IsString, MinLength, IsEmail, IsOptional, IsIn } from 'class-validator';

export class UserDto {
  @IsString()
  user_id: string;

  @IsString()
  name: string;

  @IsString()
  nickname: string;

  @IsIn(['male', 'female', 'other'])
  sex: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsString()
  @MinLength(3)
  password: string;
}
