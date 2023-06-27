// app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { TestController } from '../controllers/test.controller';
import { AppService } from '../services/app.service';
import { TestService } from 'src/services/test.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../config/database.config';
import { UserModule } from './user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UserModule,  // Import the UserModule
  ],
  controllers: [
    AppController, 
    TestController, 
    // UserController is now provided by UserModule
  ],
  providers: [
    AppService, 
    TestService, 
    // UserService and UserRegistrationService are now provided by UserModule
  ],
})
export class AppModule {}
