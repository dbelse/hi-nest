// main.ts 이름은 바꾸면 안됑 
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// function 이름은 아무거나 해도 됑
async function bootstrap() {
  const app = await NestFactory.create(AppModule); // await NestFactory.create(AppModule) 호출
  app.useGlobalPipes(new ValidationPipe({ // NestJS 가 들어오는 query에 유효성 검사
    whitelist: true, // "hacked": "by me" 같은 엉뚱한 query 들어오면 validator에 도달하지도 않을 거양 == 그거 빼고 저장.
    forbidNonWhitelisted: true, // 보안 업그레이드. 누군가 이상한 걸 보내면 리퀘스트 자체를 막아버린당 == 아예 저장 X.
    transform: false, // true로 해주면 url로 들어오는 string 값 받아서 넘겨줄 때 자동으로 type transform 가능
                      // controller와 service에서 id 자체를 number로 받아올 수 있음 => stringToInt 불필요!
  }));
  await app.listen(3000); // 어플리케이션은 3000번의 포트를 리스닝하고 있당.
}
bootstrap();
