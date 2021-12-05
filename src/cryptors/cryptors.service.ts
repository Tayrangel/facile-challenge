import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CryptorRepository } from './cryptors.repository';

@Injectable()
export class CryptorsService {
    constructor(
        @InjectRepository(CryptorRepository)
        private cryptorRepository: CryptorRepository,
      ) {}
}
