import { Request, Response } from 'express';
import {StatusCodes} from 'http-status-codes';
import * as yup from 'yup';

interface ICidade {
  nome: string
}

const dodyValidation: yup.SchemaOf<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3)
});

export const create = async (req: Request<{},{}, ICidade>, res: Response ) => {
  let validatedData: ICidade| undefined = undefined;
  try {
    validatedData = await dodyValidation.validate(req.body);
    console.log(validatedData);
    res.send('Cadastrado com sucesso');
  } catch (error) {
    const yupError = error as yup.ValidationError;
    res.json({
      errors: {
        default: yupError.message
      }
    });
   
  }

 
};