// models
import { FilterPodcastModel } from '../models/filter-podcast-model';
// repo 
import { repositoryPodcast } from '../repositories/podcast-model';
// utils
import { StatusCode } from '../utils/status-code';

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<FilterPodcastModel> => {
  let responseFormat: FilterPodcastModel = {
    statusCode: 0,
    body: [],
  };

  const queryString = podcastName?.split('?p=')[1] ?? '';
  const data = await repositoryPodcast(queryString);

  responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
    body: data,
  }

  return responseFormat;
};
