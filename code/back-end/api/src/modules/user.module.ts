// user.module.ts

import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';
import { UserRegistrationService } from '../services/user/user.registration.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // User entity is included in TypeORM context
  controllers: [UserController],
  providers: [UserService, UserRegistrationService], // Add UserRegistrationService here
})
export class UserModule {}
