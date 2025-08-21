import { Podcast } from './podcast.interface';

export interface FilterPodcastModel {
  statusCode: number;
  body: Podcast[];
}
