import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({                            // dependency injection
    controllers: [MoviesController], // 2. NestJS가 provider import해 controller에 주입해줄거양.
    providers: [MoviesService]       // 1. 여기에다 provider 두면
})
export class MoviesModule {}
