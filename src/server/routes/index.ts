import { Router } from 'express';
import {StatusCodes} from 'http-status-codes';

const router =  Router();


router.post('/teste', (_, res) => {
  return res.status(StatusCodes.OK).json('Ola, dev!'); 
});

router.post('/teste', (_, res) => {
  return res.status(StatusCodes.OK).json('Teste ok'); 
});

export { router };