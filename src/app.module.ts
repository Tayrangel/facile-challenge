import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { CryptorsModule } from './cryptors/cryptors.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), CryptorsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}