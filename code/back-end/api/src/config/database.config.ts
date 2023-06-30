// src/config/database.config.ts

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  // type: 'mysql',
  // host: process.env.DATABASE_HOST || 'localhost',
  // port: Number(process.env.DATABASE_PORT) || 3306,
  // username: process.env.DATABASE_USER || 'root',
  // password: process.env.DATABASE_PASSWORD || '9169',
  // database: process.env.DATABASE_NAME || 'time_lens',
  // entities: [__dirname + '/../**/*.entity.{js,ts}'],
  type: 'mysql',
  host: 'tl-db-dev',
  port: Number(process.env.DATABASE_PORT) || 3306,
  username: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PASSWORD || '9169',
  database: process.env.DATABASE_NAME || 'time_lens',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: false,
  logging: true, // this will log all SQL queries to the console
};
