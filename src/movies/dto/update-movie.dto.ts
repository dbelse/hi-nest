// 기본적으로 class얌.

import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";
import { CreateMovieDto } from "./create-movie.dto";

// export class UpdateMovieDto {
//     // dto를 위한 decorator
//     @IsString()
//     readonly title?: string; // make them not required. may wants to update only year for ex.

//     @IsNumber()
//     readonly year?: number;

//     @IsString({ each: true })
//     readonly genres?: string[];
// }

export class UpdateMovieDto extends PartialType(CreateMovieDto) {} // CreateMoveDto(basetype)와 똑같당
                                                                   // 전부 필수 사항이 아니라는 것만 빼면 !
