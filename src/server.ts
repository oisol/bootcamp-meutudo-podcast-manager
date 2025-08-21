import * as http from 'node:http';
import { app } from './app';

const server = http.createServer(app);
const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
