import { IsString, MinLength } from 'class-validator';

export class UserDto {
  @IsString()
  readonly username: string;

  @IsString()
  @MinLength(8)
  readonly password: string;
}
