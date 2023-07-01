// app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { TestController } from '../controllers/test.controller';
import { AppService } from '../services/app.service';
import { TestService } from 'src/services/test.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmConfig } from '../config/database.config';
import { UserModule } from './user.module';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '../config/service.config';

@Module({
  imports: [
    UserModule, // Import the UserModule
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      cache: true,
      isGlobal: true,
      ignoreEnvFile: false,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => getTypeOrmConfig(),
    }),
  ],
  controllers: [
    AppController,
    TestController,
    // UserController is now provided by UserModule
  ],
  providers: [
    ConfigService,
    AppService,
    TestService,
    // UserService and UserRegistrationService are now provided by UserModule
  ],
})
export class AppModule {}
