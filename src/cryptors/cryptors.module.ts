import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CryptorRepository } from './cryptors.repository';
import { CryptorsService } from './cryptors.service';
import { CryptorsController } from './cryptors.controller';

@Module({
    imports: [TypeOrmModule.forFeature([CryptorRepository])],
    providers: [CryptorsService],
    controllers: [CryptorsController]
})
export class CryptorsModule {}
