import { Router } from 'express';
import {StatusCodes} from 'http-status-codes';

import { CidadesController } from '../../controllers';

const router =  Router();

router.post('/', (_, res) => {
  return res.status(StatusCodes.OK).json('Ola dev!'); 
});

router.post('/cidades', CidadesController.create);


export { router };