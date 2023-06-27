// src/config/database.config.ts

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 11006,
  username: 'jyk',
  password: 'jyk9169',
  database: 'jyk',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
