import express from 'express';
import { router } from './routes';
import 'dotenv/config'; //lib para usar variaveis de ambiente

const server = express();

server.use(express.json());
server.use(router);

export { server };

