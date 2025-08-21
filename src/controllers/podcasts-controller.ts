import { IncomingMessage, ServerResponse } from 'node:http';
// Services
import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
// Models
import { FilterPodcastModel } from '../models/filter-podcast-model';
// Utils 
import { ContentType } from '../utils/content-type';

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  const content: FilterPodcastModel = await serviceListEpisodes(); // adicionar service de listagem de episoduios

  res.writeHead(content.statusCode, { 'Content-Type': ContentType.JSON });
  res.write(JSON.stringify(content.body));
  res.end();
};

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  const content: FilterPodcastModel = await serviceFilterEpisodes(req.url); // adicionar service de filtragem de episodios

  res.writeHead(content.statusCode, { 'Content-Type': ContentType.JSON });
  res.write(JSON.stringify(content.body));
  res.end();
};


