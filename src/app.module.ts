// 모듈은 하나의 앱이라고 보면 된댕
// 모듈에서는 우리가 하는 모든걸 import 해올거양
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { MoviesModule } from './movies/movies.module';

// 얘가 함수 데코레이터랭. NestJS는 데코레이터와 함께. 데코레이터는 클래스에 함수 기능을 추가할 수 있기 때문.
// 그냥 클래스 위의 함수이고 클래스를 위해 움직인다고 생각행. 아이스크림 위의 초콜릿 칩
@Module({
  imports: [MoviesModule],
  controllers: [AppController], // 기본적으로 url 가져오고 함수 실행하는 것
  providers: [AppService],
}) 
export class AppModule {} // AppModule 은 클래스양
