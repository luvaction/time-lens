// // config.service.ts

// import { Injectable } from '@nestjs/common';
// import * as dotenv from 'dotenv';
// import * as fs from 'fs';

// @Injectable()
// export class ConfigService {
//   private readonly envConfig: { [key: string]: string };

//   constructor() {
//     this.envConfig = dotenv.parse(
//       fs.readFileSync(`.env.${process.env.NODE_ENV}`),
//     );
//   }

//   get(key: string): string {
//     return this.envConfig[key];
//   }
// }
