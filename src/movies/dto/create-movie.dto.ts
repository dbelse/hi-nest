// 기본적으로 class얌.

import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMovieDto {
    // dto를 위한 decorator
    @IsString()
    readonly title: string;

    @IsNumber()
    readonly year: number;

    @IsOptional() // UpdateMovieDto 에서 not required로 바꿔서! each: true를 false로 바꿔줘도 됑.
    @IsString({ each: true })
    readonly genres: string[];
}