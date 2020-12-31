// controller는 express.js의 controller/router 랑 비슷한 것.
// url을 가져와서 함수로 매핑하는 것 => 라우터 세팅 안해도 됑.
import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello(); // 왜 아래처럼 바로 string return 안해주고 굳이 service를 참조할까?
    // NestJS는 controller를 business logig과 구분짓고 싶어 해성. Single-responsibility principle
    // => controller는 그냥 url 가져오는 역할일 뿐! 일반 함수는 service에
    // 데코레이터에 아래의 함수 이름과 service에 정의한 함수 이름은 달라도 됨
  }

  // 데코레이터는 꾸며주는 함수나 클래스랑 붙어있어야 한댕. @, () 사이 엔터 금지 !!
  @Get("/hello") // 누군가가 url /hello로 들어온다면
  sayHello(): string { // sayHello 함수를 실행해야 행.
    return "Hello everyone";
  }
  // @Post 로 바꾸면
  // {"statusCode":404,"message":"Cannot GET /hello","error":"Not Found"}
  // status 404로 /hello를 가져올 수 없다
}
