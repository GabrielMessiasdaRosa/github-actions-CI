import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(): Promise<any> {
    const helloMessage = 'Full Cycle Rocks!';
    return 'Full Cycle Rocks!' as any;
  }
}
