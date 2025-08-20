import * as http from 'node:http';

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  const [baseUrl, queryString] = (req.url || '').split('?');

  if (req.method === 'GET' && baseUrl === '/list') {
    await console.log(';p');
  }

  if (req.method === 'GET' && baseUrl === '/episode') {
    await console.log('XD')
  }
};
