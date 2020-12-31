import { Injectable } from '@nestjs/common';

// hello world 당 ~.~
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
