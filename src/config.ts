import * as dotenv from 'dotenv';

dotenv.config();

export interface NestPlaygroundSchema {
  id: number;
  name: string;
  description: string;
}

export const getSeoServiceConfig = () => ({
  test: process.env.TEST,
});

export class CustomConfig {
  static MySqlConfig() {
    return {
      baseUrl: process.env.SQL_DB_URL,
      port: Number(process.env.SQL_DB_PORT),
      password: process.env.SQL_DB_PASSWORD,
      user: process.env.SQL_DB_USER,
      dataBaseName: 'playground',
    };
  }
}
