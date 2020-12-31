import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable() // dependency injection !!
export class MoviesService {
    private movies:  Movie[] = [];

    getAll(): Movie[] {
        return this.movies; // 진짜 데이터베이스는 query문이 올거양.
    }

    getOne(id: string): Movie { // url로 보낸 값은 뭐든지 string
        const movie =  this.movies.find(movie => movie.id === parseInt(id)); // parseInt(id)나 +id로 stringToInt
        if(!movie) {
            throw new NotFoundException(`Movie with ID ${id} not found.`); // 에러 메세지 출력
        }
        return movie; 
    }

    deleteOne(id: string) { // : Boolean
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== +id);
        // return true; 리턴 안해도 된댕
    }

    create(movieData: CreateMovieDto) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData,
        });
    }

    update(id: string, updateData: UpdateMovieDto) {
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...movie, ...updateData});
    }
}
