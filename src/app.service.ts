import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(): Promise<any> {
    const helloMessage: any = 'Full Cycle Rocks!' as any;
    return helloMessage;
  }
}
