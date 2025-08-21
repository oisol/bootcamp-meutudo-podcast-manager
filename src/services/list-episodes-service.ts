import { FilterPodcastModel } from "../models/filter-podcast-model";
// repositories
import { repositoryPodcast } from '../repositories/podcast-model';
// utilities
import { StatusCode } from '../utils/status-code';

export const serviceListEpisodes = async (): Promise<FilterPodcastModel> => {
  let responseFormat: FilterPodcastModel = {
    statusCode: 0,
    body: [],
  };

  const data = await repositoryPodcast();

  responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
    body: data,
  }

  return responseFormat;
};
