import { EntityRepository, Repository } from 'typeorm';
import { Cryptor } from './cryptor.entity';

@EntityRepository(Cryptor)
export class CryptorRepository extends Repository<Cryptor> {}