// app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { TestController } from '../controllers/test.controller';
import { UserController } from '../controllers/user.controller';
import { AppService } from '../services/app.service';
import { TestService } from 'src/services/test.service';
import { UserService } from 'src/services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRegistrationService } from '../services/user/user.registration.service';
import { config } from '../config/database.config';

@Module({
  imports: [TypeOrmModule.forRoot(config)],
  controllers: [AppController, TestController, UserController],
  providers: [AppService, TestService, UserService, UserRegistrationService],
})
export class AppModule {}
