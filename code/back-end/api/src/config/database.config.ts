import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as appConfig from './app.config';

export function getTypeOrmConfig(): TypeOrmModuleOptions {
  console.log("NODE_ENV:", process.env.NODE_ENV)
  const environment = process.env.NODE_ENV || 'dev';
  console.log("environment:", environment)
  switch (environment) {
    case 'local':
      return appConfig.local.database as TypeOrmModuleOptions;
    case 'dev':
      return appConfig.dev.database as TypeOrmModuleOptions;
    case 'test':
      return appConfig.test.database as TypeOrmModuleOptions;
    // Add more cases for other environments as needed
    default:
      return appConfig.test.database as TypeOrmModuleOptions; // Default to local configuration if NODE_ENV is not set or invalid
  }
}



// export function getTypeOrmConfig(): TypeOrmModuleOptions {
//   return {
//     type: 'mysql',
//     host: process.env.DATABASE_HOST || 'localhost',
//     port: Number(process.env.DATABASE_PORT) || 3306,
//     username: process.env.DATABASE_USER || 'root',
//     password: process.env.DATABASE_PASSWORD || '9169',
//     database: process.env.DATABASE_NAME || 'time_lens',
//     entities: [__dirname + '/../**/*.entity.{js,ts}'],
//     synchronize: false,
//     logging: true,
//   };
// }
