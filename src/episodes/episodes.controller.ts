import { ConfigService } from 'src/config/config.service';
import { EpisodesService } from './episodes.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import {
  Episode,
  EpisodeCreateRequest,
  EpisodeDeleteRequest,
} from 'src/assets/classes-episode';

@Controller('episodes')
export class EpisodesController {
  constructor(
    private EpisodesService: EpisodesService,
    private ConfigService: ConfigService,
  ) {}

  @Get()
  findAll(
    @Query('sort') sort: 'asc' | 'desc' = 'desc',
    // @Query('limit', new DefaultValuePipe(20), ParseIntPipe) limit: number,
  ) {
    console.log(sort);
    return this.EpisodesService.getAllEpisodes(sort);
  }

  @Get('featured')
  findFeatured(): Episode[] | undefined {
    return this.EpisodesService.getFeatured();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    console.log(id);
    return this.EpisodesService.findOne(id);
  }

  @Post()
  create(@Body(ValidationPipe) reqEpisode: EpisodeCreateRequest) {
    console.log(reqEpisode);
    return this.EpisodesService.createEpisode(reqEpisode);
  }

  @Delete()
  delete(@Body(ValidationPipe) reqEpisode: EpisodeDeleteRequest) {
    return this.EpisodesService.deleteEpisode(reqEpisode);
  }
}
