import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello WARUDO! TOKI WO TOMARE! Trying to make a change!';
  }
}
