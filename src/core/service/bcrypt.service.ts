import { compare, genSalt, hash } from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { SALT_ROUNDS } from '../constants';

export interface BcryptService {
  hashPassword(password: string): Promise<string>;
  comparePassword(password: string, hash: string): Promise<boolean>;
}
@Injectable()
export class BcryptServiceImpl implements BcryptService {
  async hashPassword(password: string): Promise<string> {
    const salt = await genSalt(SALT_ROUNDS || 10);
    return hash(password, salt);
  }
  async comparePassword(password: string, hash: string): Promise<boolean> {
    return compare(password, hash);
  }
}
