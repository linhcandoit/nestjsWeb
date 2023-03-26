import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Tuan Linh, try your best Tuan Linh!';
  }
}
