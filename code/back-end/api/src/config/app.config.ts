// app.config.ts

export const test = {
    database: {
      type: 'mysql',
      host: 'localhost',
      port: 51000,
      username: 'root',
      password: '9169',
      database: 'time_lens',
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: false,
      logging: true,
    },
  };

export const local = {
    database: {
      type: 'mysql',
      host: 'tl-db-local',
      port: 3306,
      username: 'root',
      password: '9169',
      database: 'time_lens',
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: false,
      logging: true,
    },
  };
  
  export const dev = {
    database: {
      type: 'mysql',
      host: 'tl-db-dev',
      port: 3306,
      username: 'root',
      password: '9169',
      database: 'time_lens',
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: false,
      logging: true,
    },
  };
  