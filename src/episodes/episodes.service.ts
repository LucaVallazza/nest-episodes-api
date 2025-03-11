/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Episode, EpisodeCreateRequest, EpisodeDeleteRequest } from 'src/assets/classes-episode';


@Injectable()
export class EpisodesService {
  episodes: Episode[] = [
    {
      id: '550e8400-e29b-41d4-a716-446655440000',
      name: 'Pilot',
      duration: 42,
      rating: 4.5,
      featured: true
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440001',
      name: 'The Beginning',
      duration: 45,
      rating: 4.8,
      featured: true
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440002',
      name: 'The Revelation',
      duration: 38,
      rating: 4.3,
      featured: false
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440003',
      name: 'The Finale',
      duration: 52,
      rating: 4.9,
      featured: false
    }
  ];

  getAllEpisodes(sort: 'desc' | 'asc' =  'desc'){
    return this.episodes.sort((a, b) => {
      const compareResult = a.name[0].localeCompare(b.name[0]);
      return sort === 'asc' ? compareResult : -compareResult;
    });
  }

  findOne(id :string) : Episode | undefined{
    return this.episodes.find(e => e.id == id)
  }

  getFeatured(): Episode[] | undefined{
    return this.episodes.filter(e => e.featured)
  }

  deleteAllEpisodes(){
    this.episodes = []
    return this.episodes
  }

  createEpisode(episode : EpisodeCreateRequest){
    const newEpisode = {... episode, id: randomUUID()}
    this.episodes.push(newEpisode)

    return newEpisode
  }

  deleteEpisode(episode: EpisodeDeleteRequest){
    const deletedEpisode = this.episodes.find((e)=>(
      e.duration === episode?.duration || 
      e.id === episode?.id ||
      e.name === episode?.name || 
      e.rating === episode?.rating 
    ))

    if (!deletedEpisode) throw new NotFoundException();

    const index = this.episodes.indexOf(deletedEpisode);
    return this.episodes.splice(index);


  }


}
