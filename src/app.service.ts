import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    const helloMessage: any = 'Full Cycle Rocks!' as any;
    return 'Full Cycle Rocks!';
  }
}
