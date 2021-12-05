import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'ch3ch3oh!@',
  database: 'challenge',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};