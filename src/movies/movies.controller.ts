import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies') // entry point control
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {} // 서비스에 접근하려면 요청을 해야행 => this.moviesService.getAll 등 사용 가능!
                            // constructor 이름: class 이름
    @Get()
    getAll(): Movie[] { // Movie[] 를 리턴할거양.
        return this.moviesService.getAll();
    }

    @Get('search') // search 부분이 @Get(":id") 아래에 있으면 'search'를 id로 판단행 주의!!
    search(@Query('year') searchingYear: string) {
        return `We are searching for a movie made after: ${searchingYear}`;
    }

    @Get(':id')
    getOne(@Param('id') movieId: string): Movie { // url에 있는 id라는 parameter를 get해서
                                                  // movieId라는 argument에 string 타입으로 저장 하고싶엉!
                                                  // @Param로 먼저 요청해야하는 것 잊지망.
        console.log(typeof movieId);
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        console.log(movieData);
        //return movieData;
        return this.moviesService.create(movieData);
    }

    @Delete(':id')
    remove(@Param('id') movieId: string) {
        //return `This will delete a movie with the id: ${movieId}`; // '', "" 안에는 ${} 못쓰넹
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(':id') // Put은 모든 리소스 업데이트. Patch는 리소스의 일부분만 업데이트.
    patch(@Param('id') movieId: string, @Body() updateData: UpdateMovieDto) {
        // return {
        //     updatedMovie: movieId,  // 업데이트할 movie id와
        //     ...updateData,          // 우리가 보낼 데이터의 오브젝트 리턴할거얌.
        // };
        return this.moviesService.update(movieId, updateData);
    }
}
