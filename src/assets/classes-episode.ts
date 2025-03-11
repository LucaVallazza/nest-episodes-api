/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class Episode {
  @IsString()
  name: string;

  @IsNumber()
  duration: number;

  @IsNumber()
  rating: number;

  @IsString()
  id: string;

  @IsBoolean()
  featured: boolean;
}

export class EpisodeCreateRequest {
  @IsString()
  name: string;

  @IsNumber()
  duration: number;

  @IsNumber()
  rating: number;

  @IsBoolean()
  featured: boolean;
}

export class EpisodeDeleteRequest {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  duration?: number;

  @IsNumber()
  @IsOptional()
  rating?: number;

  @IsString()
  @IsOptional()
  id?: string;
}
